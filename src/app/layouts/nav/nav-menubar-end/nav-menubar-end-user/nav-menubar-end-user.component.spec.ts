import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndUserComponent } from './nav-menubar-end-user.component';

describe('NavMenubarEndUserComponent', () => {
  let component: NavMenubarEndUserComponent;
  let fixture: ComponentFixture<NavMenubarEndUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
