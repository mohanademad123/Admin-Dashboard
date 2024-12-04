import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDeactivateAccountComponent } from './settings-deactivate-account.component';

describe('SettingsDeactivateAccountComponent', () => {
  let component: SettingsDeactivateAccountComponent;
  let fixture: ComponentFixture<SettingsDeactivateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDeactivateAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsDeactivateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
