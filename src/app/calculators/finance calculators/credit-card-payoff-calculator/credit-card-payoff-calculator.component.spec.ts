import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPayoffCalculatorComponent } from './credit-card-payoff-calculator.component';

describe('CreditCardPayoffCalculatorComponent', () => {
  let component: CreditCardPayoffCalculatorComponent;
  let fixture: ComponentFixture<CreditCardPayoffCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardPayoffCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardPayoffCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
