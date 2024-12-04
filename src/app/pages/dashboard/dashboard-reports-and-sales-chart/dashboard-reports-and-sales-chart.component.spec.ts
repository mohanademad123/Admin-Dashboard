import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportsAndSalesChartComponent } from './dashboard-reports-and-sales-chart.component';

describe('DashboardReportsAndSalesChartComponent', () => {
  let component: DashboardReportsAndSalesChartComponent;
  let fixture: ComponentFixture<DashboardReportsAndSalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardReportsAndSalesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReportsAndSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
