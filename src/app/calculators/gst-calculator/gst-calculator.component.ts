import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gst-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gst-calculator.component.html',
  styleUrl: './gst-calculator.component.css'
})
export class GstCalculatorComponent {
  amount: number | null = null;
  gstPercentage: number | null = null;
  gstAmount: number | null = null;
  totalAmount: number | null = null;

  calculateGST() {
    if (this.amount == null || this.gstPercentage == null) {
      this.gstAmount = null;
      this.totalAmount = null;
      return;
    }

    this.gstAmount = (this.amount * this.gstPercentage) / 100;
    this.totalAmount = this.amount + this.gstAmount;
  }
}
