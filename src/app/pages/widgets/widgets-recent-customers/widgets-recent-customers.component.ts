import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-widgets-recent-customers',
  standalone: true,
  imports: [ButtonModule, NgApexchartsModule],
  templateUrl: './widgets-recent-customers.component.html',
  styleUrl: './widgets-recent-customers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:mr-3 p-4 pr-5 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsRecentCustomersComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [60, 50, 80, 40, 100, 60]
        },
        {
          name: "series2",
          data: [70, 60, 110, 40, 50, 70]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      tooltip: {
        y: {
          formatter: (val: number) => `$${val} thousands`
        }
      }
    };
  }
}
