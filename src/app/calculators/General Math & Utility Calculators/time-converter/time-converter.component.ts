import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-converter.component.html'
})
export class TimeConverterComponent {
  hours = 0;
  minutes = 0;

  toMinutes() {
    this.minutes = this.hours * 60;
  }

  toHours() {
    this.hours = this.minutes / 60;
  }
}
