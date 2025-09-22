import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-difference-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-difference-calculator.component.html'
})
export class DateDifferenceCalculatorComponent {
  startDate: string = '';
  endDate: string = '';
  differenceDays = 0;

  calculate() {
    if (!this.startDate || !this.endDate) return;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diff = Math.abs(end.getTime() - start.getTime());
    this.differenceDays = Math.floor(diff / (1000 * 3600 * 24));
  }
}
