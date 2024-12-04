import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCompletedComponent } from './step-completed.component';

describe('StepCompletedComponent', () => {
  let component: StepCompletedComponent;
  let fixture: ComponentFixture<StepCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
