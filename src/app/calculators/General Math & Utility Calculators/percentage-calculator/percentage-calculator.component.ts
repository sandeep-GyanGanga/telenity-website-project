import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-percentage-calculator',
  imports: [CommonModule,FormsModule],
  templateUrl: './percentage-calculator.component.html',
  styleUrl: './percentage-calculator.component.css'
})
export class PercentageCalculatorComponent {

  mode: string = 'basic';
  percentage?: number;
  base?: number;
  part?: number;
  whole?: number;
  value1?: number;
  value2?: number;
  result: string | null = null;
  history: string[] = [];

  calculate() {
    let calcResult: number | null = null;

    switch (this.mode) {
      case 'basic':
        if (this.percentage != null && this.base != null) {
          calcResult = (this.percentage / 100) * this.base;
          this.result = `${this.percentage}% of ${this.base} = ${calcResult}`;
        }
        break;

      case 'reverse':
        if (this.part != null && this.whole != null && this.whole !== 0) {
          calcResult = (this.part / this.whole) * 100;
          this.result = `${this.part} is ${calcResult}% of ${this.whole}`;
        }
        break;

      case 'increase':
        if (this.value1 != null && this.value2 != null) {
          calcResult = ((this.value2 - this.value1) / this.value1) * 100;
          this.result = `Increase: ${calcResult}%`;
        }
        break;

      case 'decrease':
        if (this.value1 != null && this.value2 != null) {
          calcResult = ((this.value1 - this.value2) / this.value1) * 100;
          this.result = `Decrease: ${calcResult}%`;
        }
        break;

      case 'change':
        if (this.value1 != null && this.value2 != null) {
          calcResult = ((this.value2 - this.value1) / this.value1) * 100;
          this.result = `Change: ${calcResult}%`;
        }
        break;
    }

    if (this.result) {
      this.history.unshift(this.result);
      if (this.history.length > 10) this.history.pop(); // keep only last 10
    }
  }

}
