import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-sip-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.css']
})
export class SipCalculatorComponent implements AfterViewInit {
  investmentType: string = 'sip';
  monthlyInvestment: number = 5000;
  annualRate: number = 12;
  years: number = 10;
  stepUp: number = 0;

  totalInvested: number = 0;
  totalReturns: number = 0;
  maturityValue: number = 0;
  calculated: boolean = false;

  history: string[] = [];
  private chart: Chart | null = null;

  ngAfterViewInit() {
    // If already calculated before view init, render chart
    if (this.calculated) {
      this.renderChart();
    }
  }

  calculateSIP() {
    const P = this.monthlyInvestment || 0;
    const r = (this.annualRate || 0) / 100 / 12;
    const n = (this.years || 0) * 12;
    const stepUp = this.stepUp ? this.stepUp / 100 : 0;

    let invested = 0;
    let maturity = 0;
    let sipAmount = P;

    for (let i = 1; i <= n; i++) {
      invested += sipAmount;
      maturity = (maturity + sipAmount) * (1 + r);

      if (stepUp > 0 && i % 12 === 0) {
        sipAmount += sipAmount * stepUp;
      }
    }

    this.totalInvested = invested;
    this.maturityValue = maturity;
    this.totalReturns = maturity - invested;
    this.calculated = true;

    // Wait for Angular to render <canvas> before creating chart
    setTimeout(() => this.renderChart());
  }

  renderChart() {
    const ctx = document.getElementById('sipChart') as HTMLCanvasElement;
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Invested', 'Returns'],
        datasets: [
          {
            data: [this.totalInvested, this.totalReturns],
            backgroundColor: ['#36A2EB', '#4CAF50'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
        },
      },
    });
  }
}
