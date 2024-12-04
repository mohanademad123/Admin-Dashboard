import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsSalesOverviewComponent } from './widgets-sales-overview.component';

describe('WidgetsSalesOverviewComponent', () => {
  let component: WidgetsSalesOverviewComponent;
  let fixture: ComponentFixture<WidgetsSalesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsSalesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsSalesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
