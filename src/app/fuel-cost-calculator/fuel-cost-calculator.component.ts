import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fuel-cost-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fuel-cost-calculator.component.html',
  styleUrls: ['./fuel-cost-calculator.component.css']
})
export class FuelCostCalculatorComponent {
  distance: number = 0; // in km
  fuelEfficiency: number = 0; // km per liter
  fuelPrice: number = 0; // per liter
  totalCost: number = 0;

  calculateCost() {
    if (this.distance > 0 && this.fuelEfficiency > 0 && this.fuelPrice > 0) {
      const litersNeeded = this.distance / this.fuelEfficiency;
      this.totalCost = litersNeeded * this.fuelPrice;
    } else {
      this.totalCost = 0;
    }
  }
}
