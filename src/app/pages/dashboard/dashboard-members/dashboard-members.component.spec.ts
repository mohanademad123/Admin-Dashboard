import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMembersComponent } from './dashboard-members.component';

describe('DashboardMembersComponent', () => {
  let component: DashboardMembersComponent;
  let fixture: ComponentFixture<DashboardMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
