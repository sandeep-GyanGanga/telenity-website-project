import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPayoffComponent } from './credit-card-payoff.component';

describe('CreditCardPayoffComponent', () => {
  let component: CreditCardPayoffComponent;
  let fixture: ComponentFixture<CreditCardPayoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardPayoffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardPayoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
