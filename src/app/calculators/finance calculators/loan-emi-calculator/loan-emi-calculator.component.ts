import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-emi-calculator',
  imports: [CommonModule,FormsModule],
  templateUrl: './loan-emi-calculator.component.html',
  styleUrl: './loan-emi-calculator.component.css'
})
export class LoanEmiCalculatorComponent {
principal!: number;
  rate!: number;
  tenure!: number;

  emi!: number;
  totalPayment!: number;
  totalInterest!: number;

  calculateEMI() {
    const monthlyRate = this.rate / 12 / 100;
    this.emi = this.principal * monthlyRate * Math.pow(1 + monthlyRate, this.tenure) /
               (Math.pow(1 + monthlyRate, this.tenure) - 1);

    this.totalPayment = this.emi * this.tenure;
    this.totalInterest = this.totalPayment - this.principal;
  }
}
