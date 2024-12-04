import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAccountInfoComponent } from './step-account-info.component';

describe('StepAccountInfoComponent', () => {
  let component: StepAccountInfoComponent;
  let fixture: ComponentFixture<StepAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAccountInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
