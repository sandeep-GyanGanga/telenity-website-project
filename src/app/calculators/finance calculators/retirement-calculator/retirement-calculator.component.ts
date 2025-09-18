import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-retirement-calculator',
  imports: [CommonModule,FormsModule],

  templateUrl: './retirement-calculator.component.html'
})
export class RetirementCalculatorComponent {
  currentAge = 30;
  retirementAge = 60;
  monthlySavings = 10000;
  annualReturn = 8;

  futureValue: number | null = null;

  calculate() {
    const n = (this.retirementAge - this.currentAge) * 12;
    const r = this.annualReturn / 12 / 100;
    this.futureValue = this.monthlySavings * ((Math.pow(1 + r, n) - 1) / r);
  }
}
