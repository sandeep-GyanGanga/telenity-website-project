import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiCalculatorComponent } from './digi-calculator.component';

describe('DigiCalculatorComponent', () => {
  let component: DigiCalculatorComponent;
  let fixture: ComponentFixture<DigiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
