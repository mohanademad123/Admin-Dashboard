import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndThemeComponent } from './nav-menubar-end-theme.component';

describe('NavMenubarEndThemeComponent', () => {
  let component: NavMenubarEndThemeComponent;
  let fixture: ComponentFixture<NavMenubarEndThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
