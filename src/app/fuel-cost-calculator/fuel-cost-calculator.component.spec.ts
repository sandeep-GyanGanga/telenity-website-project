import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCostCalculatorComponent } from './fuel-cost-calculator.component';

describe('FuelCostCalculatorComponent', () => {
  let component: FuelCostCalculatorComponent;
  let fixture: ComponentFixture<FuelCostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelCostCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelCostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
