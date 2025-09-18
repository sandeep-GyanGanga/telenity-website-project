import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationScheduleCalculatorComponent } from './amortization-schedule-calculator.component';

describe('AmortizationScheduleCalculatorComponent', () => {
  let component: AmortizationScheduleCalculatorComponent;
  let fixture: ComponentFixture<AmortizationScheduleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmortizationScheduleCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmortizationScheduleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
