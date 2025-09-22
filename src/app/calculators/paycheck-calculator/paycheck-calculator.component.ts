import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paycheck-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paycheck-calculator.component.html'
})
export class PaycheckCalculatorComponent {
  grossSalary = 0;
  taxRate = 10;
  deductions = 0;
  netSalary = 0;

  calculate() {
    const tax = (this.grossSalary * this.taxRate) / 100;
    this.netSalary = this.grossSalary - tax - this.deductions;
  }
}
