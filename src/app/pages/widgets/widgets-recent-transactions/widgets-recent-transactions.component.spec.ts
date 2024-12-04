import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRecentTransactionsComponent } from './widgets-recent-transactions.component';

describe('WidgetsRecentTransactionsComponent', () => {
  let component: WidgetsRecentTransactionsComponent;
  let fixture: ComponentFixture<WidgetsRecentTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsRecentTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
