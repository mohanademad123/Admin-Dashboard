import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccountService } from '../../../core/services/account/account.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-overview',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './account-overview.component.html',
  styleUrl: './account-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block surface-section border-round-lg shadow-1',
  },
})
export class AccountOverviewComponent {
  accountService = inject(AccountService);
  
  details = [
    {
      name: 'Full Name',
      value: this.accountService.fullName,
    },
    {
      name: 'Company',
      value: this.accountService.company,
    },
    {
      name: 'Contact Phone',
      value: this.accountService.contactPhone,
    },
    {
      name: 'Contact Email',
      value: this.accountService.contactEmail,
    },
    {
      name: 'Country',
      value: this.accountService.country,
    },
    {
      name: 'Language',
      value: this.accountService.language,
    },
    {
      name: 'Communication',
      value: this.accountService.communication.join(', '),
    },
    {
      name: 'Allow Changes',
      value: 'Yes',
    }
  ]
}
