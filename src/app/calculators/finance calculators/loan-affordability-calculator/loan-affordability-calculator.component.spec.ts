import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAffordabilityCalculatorComponent } from './loan-affordability-calculator.component';

describe('LoanAffordabilityCalculatorComponent', () => {
  let component: LoanAffordabilityCalculatorComponent;
  let fixture: ComponentFixture<LoanAffordabilityCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAffordabilityCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAffordabilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
