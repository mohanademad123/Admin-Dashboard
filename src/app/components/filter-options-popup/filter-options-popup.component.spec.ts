import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsPopupComponent } from './filter-options-popup.component';

describe('FilterOptionsPopupComponent', () => {
  let component: FilterOptionsPopupComponent;
  let fixture: ComponentFixture<FilterOptionsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOptionsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOptionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
