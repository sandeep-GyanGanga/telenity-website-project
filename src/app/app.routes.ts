import { Routes } from '@angular/router';
import { PercentageCalculatorComponent } from './calculators/General Math & Utility Calculators/percentage-calculator/percentage-calculator.component';
import { BmiCalculatorComponent } from './calculators/helth and fitness calculator/bmi-calculator/bmi-calculator.component';
import { SipCalculatorComponent } from './calculators/sip-calculator/sip-calculator.component';
import { DigiCalculatorComponent } from './calculators/digi-calculator/digi-calculator.component';
import { AgeCalculatorComponent } from './calculators/General Math & Utility Calculators/age-calculator/age-calculator.component';
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
import { PaycheckCalculatorComponent } from './calculators/paycheck-calculator/paycheck-calculator.component';
import { CurrencyConverterComponent } from './calculators/currency-converter/currency-converter.component';
import { CalorieCalculatorComponent } from './calculators/helth and fitness calculator/calorie-calculator/calorie-calculator.component';
import { PregnancyCalculatorComponent } from './calculators/helth and fitness calculator/pregnancy-calculator/pregnancy-calculator.component';
import { CompoundInterestCalculatorComponent } from './calculators/General Math & Utility Calculators/compound-interest-calculator/compound-interest-calculator.component';
import { DateDifferenceCalculatorComponent } from './calculators/General Math & Utility Calculators/date-difference-calculator/date-difference-calculator.component';
import { UnitConverterComponent } from './calculators/General Math & Utility Calculators/unit-converter/unit-converter.component';
import { TimeConverterComponent } from './calculators/General Math & Utility Calculators/time-converter/time-converter.component';
import { MatrixMathCalculatorComponent } from './calculators/General Math & Utility Calculators/matrix-math-calculator/matrix-math-calculator.component';
import { FuelCostCalculatorComponent } from './fuel-cost-calculator/fuel-cost-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'percentage-calculator', pathMatch: 'full' },
  { path: 'percentage-calculator', component: PercentageCalculatorComponent },
  { path: 'age-calculator', component: AgeCalculatorComponent },
  { path: 'discount-calculator', component: DiscountCalculatorComponent },
  { path: 'gst-calculator', component: GstCalculatorComponent },
 { path: 'fuel-cost-calculator', component: FuelCostCalculatorComponent },
 
  { path: 'paycheck-calculator', component: PaycheckCalculatorComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },

  // General Math & Utility Calculators
  { path: 'compound-interest-calculator', component: CompoundInterestCalculatorComponent },
  { path: 'date-difference-calculator', component: DateDifferenceCalculatorComponent },
  { path: 'unit-converter', component: UnitConverterComponent },
  { path: 'time-converter', component: TimeConverterComponent },
  { path: 'matrix-math-calculator', component: MatrixMathCalculatorComponent },

  // health and fitness calculators 
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: 'calorie-calculator', component: CalorieCalculatorComponent },
  { path: 'pregnancy-calculator', component: PregnancyCalculatorComponent },

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
