import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './unit-converter.component.html'
})
export class UnitConverterComponent {
  meters = 0;
  kilometers = 0;

  convertToKm() {
    this.kilometers = this.meters / 1000;
  }

  convertToM() {
    this.meters = this.kilometers * 1000;
  }
}
