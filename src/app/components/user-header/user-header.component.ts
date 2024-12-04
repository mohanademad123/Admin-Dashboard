import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FilterOptionsPopupComponent } from "../filter-options-popup/filter-options-popup.component";
import { ProgressBarModule } from 'primeng/progressbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../core/services/account/account.service';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [ButtonModule, FilterOptionsPopupComponent, ProgressBarModule, RouterLink, RouterLinkActive],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block p-5 pb-0 surface-section shadow-1 border-round-lg mb-5'
  }
})
export class UserHeaderComponent {
  accountService = inject(AccountService);
  links = input.required<{ name: string, link: string }[]>();
}
