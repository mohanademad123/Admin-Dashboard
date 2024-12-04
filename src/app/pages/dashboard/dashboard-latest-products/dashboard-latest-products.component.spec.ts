import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLatestProductsComponent } from './dashboard-latest-products.component';

describe('DashboardLatestProductsComponent', () => {
  let component: DashboardLatestProductsComponent;
  let fixture: ComponentFixture<DashboardLatestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLatestProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLatestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
