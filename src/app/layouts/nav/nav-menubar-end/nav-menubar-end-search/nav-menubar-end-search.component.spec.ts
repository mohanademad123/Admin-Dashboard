import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarEndSearchComponent } from './nav-menubar-end-search.component';

describe('NavMenubarEndSearchComponent', () => {
  let component: NavMenubarEndSearchComponent;
  let fixture: ComponentFixture<NavMenubarEndSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenubarEndSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarEndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
