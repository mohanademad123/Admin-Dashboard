import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccountService } from '../../../../core/services/account/account.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-settings-signin',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, PasswordModule],
  templateUrl: './settings-signin.component.html',
  styleUrl: './settings-signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1 mb-5',
  },
})
export class SettingsSigninComponent {
  accountService = inject(AccountService);
  changeEmail = signal(false);
  changePassword = signal(false);
  loading = signal(false);

  updateEmail(email: string) {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false)
      this.accountService.contactEmail = email;
      this.changeEmail.set(false);
    }, 2000);
  }

  updatePassword() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.changePassword.set(false);
    }, 2000);
  }
}
