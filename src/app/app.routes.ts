import { Routes } from '@angular/router';
import { PercentageCalculatorComponent } from './calculators/percentage-calculator/percentage-calculator.component';
import { BmiCalculatorComponent } from './calculators/bmi-calculator/bmi-calculator.component';
import { SipCalculatorComponent } from './calculators/sip-calculator/sip-calculator.component';
import { DigiCalculatorComponent } from './calculators/digi-calculator/digi-calculator.component';
import { AgeCalculatorComponent } from './calculators/age-calculator/age-calculator.component';
import { DiscountCalculatorComponent } from './calculators/discount-calculator/discount-calculator.component';
import { GstCalculatorComponent } from './calculators/gst-calculator/gst-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'percentage-calculator', pathMatch: 'full' },
  { path: 'percentage-calculator', component: PercentageCalculatorComponent },
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: 'sip-calculator', component: SipCalculatorComponent },
  { path: 'age-calculator', component: AgeCalculatorComponent },
  { path: 'discount-calculator', component: DiscountCalculatorComponent },
  { path: 'gst-calculator', component: GstCalculatorComponent },





  { path: '**', redirectTo: 'percentage-calculator' }
];
