import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-affordability-calculator',
  imports: [CommonModule,FormsModule],

  templateUrl: './loan-affordability-calculator.component.html'
})
export class LoanAffordabilityCalculatorComponent {
  income = 0;
  expenses = 0;
  interestRate = 0;
  tenureMonths = 0;
  maxLoan: number | null = null;

  calculate() {
    const eligibleEMI = this.income - this.expenses;
    const r = this.interestRate / 12 / 100;
    const n = this.tenureMonths;

    this.maxLoan = (eligibleEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
  }
}
