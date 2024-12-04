import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBillingDetailsComponent } from './step-billing-details.component';

describe('StepBillingDetailsComponent', () => {
  let component: StepBillingDetailsComponent;
  let fixture: ComponentFixture<StepBillingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBillingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepBillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
