import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  imports: [CommonModule,FormsModule],

  templateUrl: './mortgage-calculator.component.html'
})
export class MortgageCalculatorComponent {
  homePrice = 0;
  downPayment = 0;
  interestRate = 0;
  termMonths = 0;
  emi: number | null = null;

  calculate() {
    const principal = this.homePrice - this.downPayment;
    const r = this.interestRate / 12 / 100;
    const n = this.termMonths;

    this.emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
}
