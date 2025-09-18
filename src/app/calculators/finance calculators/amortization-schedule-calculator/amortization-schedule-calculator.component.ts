import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amortization-schedule-calculator',
  imports: [CommonModule,FormsModule],

  templateUrl: './amortization-schedule-calculator.component.html'
})
export class AmortizationScheduleCalculatorComponent {
  loanAmount = 0;
  interestRate = 0;
  termMonths = 0;

  emi: number | null = null;
  schedule: { month: number; principal: number; interest: number; balance: number }[] = [];

  calculateSchedule() {
    const p = this.loanAmount;
    const r = this.interestRate / 12 / 100;
    const n = this.termMonths;

    this.emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    this.schedule = [];
    let balance = p;

    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principal = this.emi - interest;
      balance -= principal;
      this.schedule.push({
        month: i,
        principal,
        interest,
        balance: balance > 0 ? balance : 0
      });
    }
  }
}
