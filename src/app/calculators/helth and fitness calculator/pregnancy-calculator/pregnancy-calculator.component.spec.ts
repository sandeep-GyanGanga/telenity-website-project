import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyCalculatorComponent } from './pregnancy-calculator.component';

describe('PregnancyCalculatorComponent', () => {
  let component: PregnancyCalculatorComponent;
  let fixture: ComponentFixture<PregnancyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregnancyCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnancyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
