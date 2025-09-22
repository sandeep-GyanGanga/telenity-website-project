import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compound-interest-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compound-interest-calculator.component.html'
})
export class CompoundInterestCalculatorComponent {
  principal = 0;
  rate = 0; // annual interest %
  timesCompounded = 1; // per year
  years = 1;
  futureValue = 0;

  calculate() {
    const r = this.rate / 100;
    this.futureValue = this.principal * Math.pow((1 + r / this.timesCompounded), this.timesCompounded * this.years);
  }
}
