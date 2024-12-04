import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AccountService } from '../../../../core/services/account/account.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-settings-profile-details',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    InputSwitchModule,
    ButtonModule,
  ],
  templateUrl: './settings-profile-details.component.html',
  styleUrl: './settings-profile-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1 mb-5',
  },
})
export class SettingsProfileDetailsComponent {
  accountService = inject(AccountService);

  loading = signal(false);

  load() {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), 2000);
  }
}
