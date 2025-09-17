import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discount-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discount-calculator.component.html',
  styleUrl: './discount-calculator.component.css'
})
export class DiscountCalculatorComponent {
  originalPrice: number | null = null;
  discountPercentage: number | null = null;
  discountAmount: number | null = null;
  finalPrice: number | null = null;

  calculateDiscount() {
    if (this.originalPrice == null || this.discountPercentage == null) {
      this.discountAmount = null;
      this.finalPrice = null;
      return;
    }

    this.discountAmount = (this.originalPrice * this.discountPercentage) / 100;
    this.finalPrice = this.originalPrice - this.discountAmount;
  }
}
