import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndNotificationsComponent } from './nav-menubar-end-notifications.component';

describe('NavMenubarEndNotificationsComponent', () => {
  let component: NavMenubarEndNotificationsComponent;
  let fixture: ComponentFixture<NavMenubarEndNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
