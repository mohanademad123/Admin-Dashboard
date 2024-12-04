import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRecentPurchasesComponent } from './widgets-recent-purchases.component';

describe('WidgetsRecentPurchasesComponent', () => {
  let component: WidgetsRecentPurchasesComponent;
  let fixture: ComponentFixture<WidgetsRecentPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsRecentPurchasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRecentPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
