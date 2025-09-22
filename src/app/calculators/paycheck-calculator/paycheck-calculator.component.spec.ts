import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckCalculatorComponent } from './paycheck-calculator.component';

describe('PaycheckCalculatorComponent', () => {
  let component: PaycheckCalculatorComponent;
  let fixture: ComponentFixture<PaycheckCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaycheckCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaycheckCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
