import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-widgets-recent-transactions',
  standalone: true,
  imports: [ButtonModule, NgApexchartsModule],
  templateUrl: './widgets-recent-transactions.component.html',
  styleUrl: './widgets-recent-transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:ml-3 p-4 pr-5 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsRecentTransactionsComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8],
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }
}
