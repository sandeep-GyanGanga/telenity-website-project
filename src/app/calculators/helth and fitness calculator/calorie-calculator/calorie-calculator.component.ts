import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calorie-calculator.component.html'
})
export class CalorieCalculatorComponent {
  age = 25;
  gender = 'male';
  weight = 70; // kg
  height = 175; // cm
  activityLevel = 1.2; // sedentary
  bmr = 0;
  caloriesNeeded = 0;

  calculate() {
    // Harris-Benedict Equation
    if (this.gender === 'male') {
      this.bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
    } else {
      this.bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
    }
    this.caloriesNeeded = this.bmr * this.activityLevel;
  }
}
