import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRecentUsersComponent } from './widgets-recent-users.component';

describe('WidgetsRecentUsersComponent', () => {
  let component: WidgetsRecentUsersComponent;
  let fixture: ComponentFixture<WidgetsRecentUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsRecentUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRecentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
