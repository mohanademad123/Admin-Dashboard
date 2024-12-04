import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRecentCustomersComponent } from './widgets-recent-customers.component';

describe('WidgetsRecentCustomersComponent', () => {
  let component: WidgetsRecentCustomersComponent;
  let fixture: ComponentFixture<WidgetsRecentCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsRecentCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRecentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
