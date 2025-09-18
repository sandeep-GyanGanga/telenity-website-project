import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-budget-expense-tracker',
  imports: [CommonModule,FormsModule],

  templateUrl: './budget-expense-tracker.component.html'
})
export class BudgetExpenseTrackerComponent {
  expenseName = '';
  expenseAmount = 0;
  expenses: { name: string; amount: number }[] = [];
  total = 0;

  addExpense() {
    if (this.expenseName && this.expenseAmount > 0) {
      this.expenses.push({ name: this.expenseName, amount: this.expenseAmount });
      this.total += this.expenseAmount;
      this.expenseName = '';
      this.expenseAmount = 0;
    }
  }

  removeExpense(index: number) {
    this.total -= this.expenses[index].amount;
    this.expenses.splice(index, 1);
  }
}
