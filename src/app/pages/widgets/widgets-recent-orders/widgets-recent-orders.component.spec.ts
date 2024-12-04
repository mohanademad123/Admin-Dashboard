import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRecentOrdersComponent } from './widgets-recent-orders.component';

describe('WidgetsRecentOrdersComponent', () => {
  let component: WidgetsRecentOrdersComponent;
  let fixture: ComponentFixture<WidgetsRecentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsRecentOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRecentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
