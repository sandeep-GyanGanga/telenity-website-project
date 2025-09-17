import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstCalculatorComponent } from './gst-calculator.component';

describe('GstCalculatorComponent', () => {
  let component: GstCalculatorComponent;
  let fixture: ComponentFixture<GstCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GstCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
