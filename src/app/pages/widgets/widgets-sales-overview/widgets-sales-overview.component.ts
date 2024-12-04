import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";

@Component({
  selector: 'app-widgets-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule, FilterOptionsPopupComponent],
  templateUrl: './widgets-sales-overview.component.html',
  styleUrl: './widgets-sales-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block xl:ml-3 p-4 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsSalesOverviewComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false
        }
      },
      tooltip: {
        y: {
          formatter: (val: number) => `$${val} thousands`
        }
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
  }
}
