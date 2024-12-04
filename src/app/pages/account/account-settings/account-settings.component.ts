import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsProfileDetailsComponent } from './settings-profile-details/settings-profile-details.component';
import { SettingsSigninComponent } from './settings-signin/settings-signin.component';
import { SettingsConnectedAccountsComponent } from './settings-connected-accounts/settings-connected-accounts.component';
import { SettingsNotificationsComponent } from './settings-notifications/settings-notifications.component';
import { SettingsDeactivateAccountComponent } from './settings-deactivate-account/settings-deactivate-account.component';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [
    SettingsProfileDetailsComponent,
    SettingsSigninComponent,
    SettingsConnectedAccountsComponent,
    SettingsNotificationsComponent,
    SettingsDeactivateAccountComponent,
  ],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingsComponent {}
