import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-widgets-recent-users',
  standalone: true,
  imports: [ButtonModule, NgApexchartsModule],
  templateUrl: './widgets-recent-users.component.html',
  styleUrl: './widgets-recent-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:ml-3 p-4 pr-5 surface-section shadow-1 border-round-lg'
  }
})

export class WidgetsRecentUsersComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "User 1",
          data: [30, 30, 50, 50, 35, 35]
        },
        {
          name: "User 2",
          data: [55, 20, 20, 20, 70, 70]
        },
        {
          name: "User 3",
          data: [60, 60, 40, 40, 30, 30]
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
      fill: {
        type: "solid",
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      tooltip: {
        y: {
          formatter: (val: number) => `$${val} thousands`
        }
      }
    };
  }

}
