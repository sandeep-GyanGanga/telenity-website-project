import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixMathCalculatorComponent } from './matrix-math-calculator.component';

describe('MatrixMathCalculatorComponent', () => {
  let component: MatrixMathCalculatorComponent;
  let fixture: ComponentFixture<MatrixMathCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixMathCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixMathCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
