import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card-payoff',
  imports: [CommonModule,FormsModule],
  templateUrl: './credit-card-payoff.component.html',
  styleUrl: './credit-card-payoff.component.css'
})
export class CreditCardPayoffComponent {
 balance!: number;
  monthlyPayment!: number;
  rate!: number;

  months!: number;
  totalInterest!: number;

  calculatePayoff() {
    let bal = this.balance;
    let interestPaid = 0;
    let m = 0;

    while (bal > 0) {
      const interest = bal * (this.rate / 100);
      bal += interest - this.monthlyPayment;
      interestPaid += interest;
      m++;
      if(m > 1000) break; // safety
    }

    this.months = m;
    this.totalInterest = interestPaid;
  }
}
