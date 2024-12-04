import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-widgets-action-needed',
  standalone: true,
  imports: [ButtonModule, NgApexchartsModule, FilterOptionsPopupComponent, TagModule],
  templateUrl: './widgets-action-needed.component.html',
  styleUrl: './widgets-action-needed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:mr-3 p-4 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsActionNeededComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          },
          dataLabels: {
            name: {
              show: false,
              fontWeight: '700',
            },
            value: {
              fontSize: '2.5rem',
              fontWeight: '700',
              show: true,
              formatter: function (val: number) {
                return val + '%';
              },
            },
          },
        },
        },
      labels: ["Cricket"]
    };
  }
}
