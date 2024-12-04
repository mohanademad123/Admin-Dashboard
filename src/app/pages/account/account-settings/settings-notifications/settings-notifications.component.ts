import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-settings-notifications',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, FormsModule],
  templateUrl: './settings-notifications.component.html',
  styleUrl: './settings-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1 mb-5',
  },
})
export class SettingsNotificationsComponent {
  loading = signal(false);

  load() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }
}
