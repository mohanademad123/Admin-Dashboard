import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuthorsComponent } from './dashboard-authors.component';

describe('DashboardAuthorsComponent', () => {
  let component: DashboardAuthorsComponent;
  let fixture: ComponentFixture<DashboardAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
