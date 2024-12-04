import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-settings-connected-accounts',
  standalone: true,
  imports: [InputSwitchModule, FormsModule, ButtonModule],
  templateUrl: './settings-connected-accounts.component.html',
  styleUrl: './settings-connected-accounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1 mb-5',
  },
})
export class SettingsConnectedAccountsComponent {
  loading = signal(false);

  load() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }
}
