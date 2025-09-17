import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HistoryItem {
  unit: string;
  weight: number;
  height: string;
  bmi: number;
  category: string;
}

@Component({
  selector: 'app-bmi-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrl: './bmi-calculator.component.css'
})
export class BmiCalculatorComponent {

  unit: string = 'metric';
  weight?: number;
  heightCm?: number;
  heightFt?: number;
  heightIn?: number;
  result: number | null = null;
  category: string = '';
  history: HistoryItem[] = [];

  calculate() {
    let bmi = 0;

    if (this.unit === 'metric' && this.weight && this.heightCm) {
      const heightM = this.heightCm / 100;
      bmi = this.weight / (heightM * heightM);
    } else if (this.unit === 'imperial' && this.weight && (this.heightFt || this.heightIn)) {
      const totalInches = (this.heightFt || 0) * 12 + (this.heightIn || 0);
      bmi = (this.weight / (totalInches * totalInches)) * 703;
    }

    if (bmi > 0) {
      this.result = parseFloat(bmi.toFixed(2));
      this.category = this.getCategory(bmi);

      // Save to history
      this.history.unshift({
        unit: this.unit,
        weight: this.weight!,
        height: this.unit === 'metric'
          ? `${this.heightCm} cm`
          : `${this.heightFt} ft ${this.heightIn || 0} in`,
        bmi: this.result,
        category: this.category
      });

      if (this.history.length > 10) this.history.pop();
    }
  }

  private getCategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }
}
