import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-widgets-recent-orders',
  standalone: true,
  imports: [ButtonModule, NgApexchartsModule],
  templateUrl: './widgets-recent-orders.component.html',
  styleUrl: './widgets-recent-orders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:mr-3 p-4 pr-5 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsRecentOrdersComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Order A",
          type: "bar",
          data: [23, 11, 22, 27, 13, 22]
        },
        {
          name: "Order B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "Order C",
          type: "bar",
          data: [30, 25, 36, 30, 45, 35]
        },
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      markers: {
        size: 0
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (val: number) => `$${val} thousands`
        }
      }
    };
  }
}
