import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-return-calculator',
  imports: [CommonModule,FormsModule],
  templateUrl: './investment-return-calculator.component.html'
})
export class InvestmentReturnCalculatorComponent {
  initial = 0;
  finalValue = 0;
  years = 1;

  roi: number | null = null;
  cagr: number | null = null;

  calculate() {
    this.roi = ((this.finalValue - this.initial) / this.initial) * 100;
    this.cagr = (Math.pow(this.finalValue / this.initial, 1 / this.years) - 1) * 100;
  }
}
