import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../../../core/services/account/account.service';

@Component({
  selector: 'app-nav-menubar-end-user',
  standalone: true,
  imports: [
    MenuModule,
    RippleModule,
    ButtonModule,
    TagModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menubar-end-user.component.html',
  styleUrl: './nav-menubar-end-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenubarEndUserComponent implements OnInit {
  private router = inject(Router)
  accountService = inject(AccountService);
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'My Account',
        routerLink: '/account/overview'
      },
      {
        label: 'My Profile',
        routerLink: '/profile/overview'
      },
      {
        separator: true,
      },
      {
        label: 'Language',
        id: 'language',
      },
      {
        label: 'Account Settings',
        routerLink: '/account/settings',
        icon: 'pi pi-cog'
      },
      {
        label: 'Sign Out',
        command: () => {
          this.router.navigate(['/auth/login']);
          localStorage.removeItem('moDash_auth_token')
        },
        icon: 'pi pi-sign-out'
      },
    ];
  }
}
