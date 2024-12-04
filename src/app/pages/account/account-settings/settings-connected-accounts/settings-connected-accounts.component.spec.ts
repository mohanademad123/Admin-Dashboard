import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConnectedAccountsComponent } from './settings-connected-accounts.component';

describe('SettingsConnectedAccountsComponent', () => {
  let component: SettingsConnectedAccountsComponent;
  let fixture: ComponentFixture<SettingsConnectedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsConnectedAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsConnectedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
