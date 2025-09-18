import { Routes } from '@angular/router';
import { PercentageCalculatorComponent } from './calculators/percentage-calculator/percentage-calculator.component';
import { BmiCalculatorComponent } from './calculators/bmi-calculator/bmi-calculator.component';
import { SipCalculatorComponent } from './calculators/sip-calculator/sip-calculator.component';
import { DigiCalculatorComponent } from './calculators/digi-calculator/digi-calculator.component';
import { AgeCalculatorComponent } from './calculators/age-calculator/age-calculator.component';
import { DiscountCalculatorComponent } from './calculators/discount-calculator/discount-calculator.component';
import { GstCalculatorComponent } from './calculators/gst-calculator/gst-calculator.component';
import { LoanEmiCalculatorComponent } from './calculators/finance calculators/loan-emi-calculator/loan-emi-calculator.component';
import { CreditCardPayoffComponent } from './calculators/finance calculators/credit-card-payoff/credit-card-payoff.component';
import { MortgageCalculatorComponent } from './calculators/finance calculators/mortgage-calculator/mortgage-calculator.component';
import { LoanAffordabilityCalculatorComponent } from './calculators/finance calculators/loan-affordability-calculator/loan-affordability-calculator.component';
import { RetirementCalculatorComponent } from './calculators/finance calculators/retirement-calculator/retirement-calculator.component';
import { InvestmentReturnCalculatorComponent } from './calculators/finance calculators/investment-return-calculator/investment-return-calculator.component';
import { BudgetExpenseTrackerComponent } from './calculators/finance calculators/budget-expense-tracker/budget-expense-tracker.component';
import { AmortizationScheduleCalculatorComponent } from './calculators/finance calculators/amortization-schedule-calculator/amortization-schedule-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'percentage-calculator', pathMatch: 'full' },
  { path: 'percentage-calculator', component: PercentageCalculatorComponent },
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: 'age-calculator', component: AgeCalculatorComponent },
  { path: 'discount-calculator', component: DiscountCalculatorComponent },
  { path: 'gst-calculator', component: GstCalculatorComponent },

  // finance calcularors
  { path: 'sip-calculator', component: SipCalculatorComponent },
  { path: 'loan-emi-calculator', component: LoanEmiCalculatorComponent },
  { path: 'credit-card-payoff-calculator', component: CreditCardPayoffComponent },
  { path: 'mortgage-calculator', component: MortgageCalculatorComponent },
  { path: 'loan-affordability-calculator', component: LoanAffordabilityCalculatorComponent },
  { path: 'retirement-calculator', component: RetirementCalculatorComponent },
  { path: 'investment-return-calculator', component: InvestmentReturnCalculatorComponent },
  { path: 'budget-expense-tracker', component: BudgetExpenseTrackerComponent },
  { path: 'amortization-schedule-calculator', component: AmortizationScheduleCalculatorComponent },





  { path: '**', redirectTo: 'percentage-calculator' }
];
