import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SalesStatisticsChartComponent } from './sales-statistics-chart/sales-statistics-chart.component';
import { DashboardActivitiesComponent } from './dashboard-activities/dashboard-activities.component';
import { DashboardReportsAndSalesChartComponent } from './dashboard-reports-and-sales-chart/dashboard-reports-and-sales-chart.component';
import { DashboardTodoComponent } from './dashboard-todo/dashboard-todo.component';
import { DashboardMembersComponent } from './dashboard-members/dashboard-members.component';
import { DashboardAuthorsComponent } from './dashboard-authors/dashboard-authors.component';
import { DashboardNotificationsComponent } from './dashboard-notifications/dashboard-notifications.component';
import { DashboardTasksOverviewComponent } from './dashboard-tasks-overview/dashboard-tasks-overview.component';
import { DashboardTrendsComponent } from './dashboard-trends/dashboard-trends.component';
import { DashboardLatestProductsComponent } from './dashboard-latest-products/dashboard-latest-products.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SalesStatisticsChartComponent,
    DashboardActivitiesComponent,
    DashboardReportsAndSalesChartComponent,
    DashboardTodoComponent,
    DashboardMembersComponent,
    DashboardAuthorsComponent,
    DashboardNotificationsComponent,
    DashboardTasksOverviewComponent,
    DashboardTrendsComponent,
    DashboardLatestProductsComponent,
    NgComponentOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  components = [
    {class: 'xxl-size-1-3', selector: SalesStatisticsChartComponent},
    {class: 'xxl-size-1-3', selector: DashboardActivitiesComponent},
    {class: 'xxl-size-1-3', selector: DashboardReportsAndSalesChartComponent},
    {class: 'xxl-size-1-3', selector: DashboardTodoComponent},
    {class: 'xxl-size-2-3', selector: DashboardMembersComponent},
    {class: 'xxl-size-1-3', selector: DashboardAuthorsComponent},
    {class: 'xxl-size-1-3', selector: DashboardNotificationsComponent},
    {class: 'xxl-size-1-3', selector: DashboardTasksOverviewComponent},
    {class: 'xxl-size-1-3', selector: DashboardTrendsComponent},
    {class: 'xxl-size-2-3', selector: DashboardLatestProductsComponent},
  ]
}
