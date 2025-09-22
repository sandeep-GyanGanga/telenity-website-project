import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-converter.component.html'
})
export class CurrencyConverterComponent {
  amount = 0;
  exchangeRate = 83.0; // e.g. USD to INR
  convertedAmount = 0;

  convert() {
    this.convertedAmount = this.amount * this.exchangeRate;
  }
}
