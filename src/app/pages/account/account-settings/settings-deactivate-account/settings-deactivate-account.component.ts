import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-settings-deactivate-account',
  standalone: true,
  imports: [ButtonModule, CheckboxModule],
  templateUrl: './settings-deactivate-account.component.html',
  styleUrl: './settings-deactivate-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1',
  },
})
export class SettingsDeactivateAccountComponent {
  loading = signal(false);

  load() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }
}
