import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgApexchartsModule  } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-reports-and-sales-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-reports-and-sales-chart.component.html',
  styleUrl: './dashboard-reports-and-sales-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardReportsAndSalesChartComponent implements OnInit {
  reportsChartOptions: any;
  salesChartOptions: any;

  ngOnInit(): void {
    this.reportsChartOptions = {
      chart: {
        type: 'area',
        height: 144,
        sparkline: {
          enabled: true,
        },
      },

      stroke: {
        curve: 'smooth',
      },

      yaxis: {
        min: 0,
      },

      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: '#ddd',
            width: 1,
            dashArray: 3,
          },
        },
      },

      series: [
        {
          name: 'Net Profit',
          data: [15, 25, 15, 40, 20, 50],
        },
      ],

      tooltip: {
        y: {
          formatter: function (val: number) {
            return '$' + val + ' thousands';
          },
        },
      },
    };

    this.salesChartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 33, 44, 60]
        },
        {
          name: "Revenue",
          data: [46, 50, 55, 59, 63, 22, 35, 66]
        },
      ],
      chart: {
        type: "bar",
        height: 200,
        width: '95%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 5,
        }
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return "$ " + val + " thousands";
          }
        }
      },
    };
  }
}
