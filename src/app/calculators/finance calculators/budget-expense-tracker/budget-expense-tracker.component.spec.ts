import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetExpenseTrackerComponent } from './budget-expense-tracker.component';

describe('BudgetExpenseTrackerComponent', () => {
  let component: BudgetExpenseTrackerComponent;
  let fixture: ComponentFixture<BudgetExpenseTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetExpenseTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetExpenseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
