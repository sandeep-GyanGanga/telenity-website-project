import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matrix-math-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matrix-math-calculator.component.html'
})
export class MatrixMathCalculatorComponent {
  matrixA = [[0, 0], [0, 0]];
  matrixB = [[0, 0], [0, 0]];
  result = [[0, 0], [0, 0]];

  calculate() {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        this.result[i][j] = this.matrixA[i][j] + this.matrixB[i][j];
      }
    }
  }
}
