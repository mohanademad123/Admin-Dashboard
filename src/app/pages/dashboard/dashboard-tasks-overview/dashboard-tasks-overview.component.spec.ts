import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTasksOverviewComponent } from './dashboard-tasks-overview.component';

describe('DashboardTasksOverviewComponent', () => {
  let component: DashboardTasksOverviewComponent;
  let fixture: ComponentFixture<DashboardTasksOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTasksOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTasksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
