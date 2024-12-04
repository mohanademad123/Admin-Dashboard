import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { NgApexchartsModule } from 'ng-apexcharts';
import { TagModule } from 'primeng/tag';

interface ITrend {
  title: string;
  description: string;
  status: string;
  imgUrl: string;
}

@Component({
  selector: 'app-dashboard-trends',
  standalone: true,
  imports: [FilterOptionsPopupComponent, NgApexchartsModule, TagModule],
  templateUrl: './dashboard-trends.component.html',
  styleUrl: './dashboard-trends.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardTrendsComponent {
  chartOptions: any;
  trends: ITrend[] = [
    {
      title: 'Top Authors',
      description: 'Ricky Hunt, Sandra Trepp',
      status: '+82$',
      imgUrl: 'icons/fox-hub.svg'
    },
    {
      title: 'Top Sales',
      description: 'PitStop Emails',
      status: '+82$',
      imgUrl: 'icons/figma.svg'
    },
    {
      title: 'Top Engagement',
      description: 'Engagement emails',
      status: '+82$',
      imgUrl: 'icons/kickstarter.svg'
    },
  ]

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [30, 30, 60, 25, 25, 40],
        }
      ],
      chart: {
        type: "area",
        height: 200,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      yaxis: {
        opposite: true,
        min: 0,
      },
      legend: {
        horizontalAlign: "left"
      },
      tooltip: {
        style: {
          fontSize: '12px'
        },
        y: {
          formatter : (val: number) => `$${val} thousands`
        }
      }
    };
  }
}
