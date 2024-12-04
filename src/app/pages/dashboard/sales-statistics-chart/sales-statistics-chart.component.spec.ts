import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatisticsChartComponent } from './sales-statistics-chart.component';

describe('SalesStatisticsChartComponent', () => {
  let component: SalesStatisticsChartComponent;
  let fixture: ComponentFixture<SalesStatisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesStatisticsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
