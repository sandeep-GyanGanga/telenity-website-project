import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregnancy-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pregnancy-calculator.component.html'
})
export class PregnancyCalculatorComponent {
  lmpDate: string = '';
  dueDate: Date | null = null;
  weeksPregnant = 0;

  calculate() {
    if (!this.lmpDate) return;
    const lmp = new Date(this.lmpDate);
    // EDD = LMP + 280 days (40 weeks)
    const edd = new Date(lmp.getTime() + (280 * 24 * 60 * 60 * 1000));
    this.dueDate = edd;

    // Weeks pregnant
    const today = new Date();
    const diff = today.getTime() - lmp.getTime();
    this.weeksPregnant = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
  }
}
