import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FilterOptionsPopupComponent } from '../../../components/filter-options-popup/filter-options-popup.component';

@Component({
  selector: 'app-sales-statistics-chart',
  standalone: true,
  imports: [NgApexchartsModule, NgClass, FilterOptionsPopupComponent],
  templateUrl: './sales-statistics-chart.component.html',
  styleUrl: './sales-statistics-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'border-round-lg shadow-1 surface-section overflow-hidden'
  }
})
export class SalesStatisticsChartComponent implements OnInit {
  chartOptions: any = {};

  cards = [
    {
      icon: 'pi pi-lightbulb',
      title: 'Weekly Sales',
      color: 'orange'
    },
    {
      icon: 'pi pi-briefcase',
      title: 'New Projects',
      color: 'indigo'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Item Orders',
      color: 'pink'
    },
    {
      icon: 'pi pi-envelope',
      title: 'Bug Reports',
      color: 'green'
    },
  ]
  ngOnInit(): void {
    this.chartOptions = getChartOptions('#F8285A', '#cb1e46');
  }
}

function getChartOptions(chartColor: string, strokeColor: string) {
  return {
    series: [
      {
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: '200px',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    fill: {
      type: 'solid',
      opacity: 0,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
    yaxis: {
      min: 0,
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ['transparent'],
    markers: {
      colors: [chartColor],
      strokeColors: [strokeColor],
      strokeWidth: 3,
    },
  };
}
