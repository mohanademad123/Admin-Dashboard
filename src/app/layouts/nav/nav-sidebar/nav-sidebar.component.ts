import { Component, inject, input, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AccountService } from '../../../core/services/account/account.service';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    StyleClassModule,
    RouterLink,
    RouterLinkActive,
    RippleModule,
    NgScrollbarModule
  ],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
  accountService = inject(AccountService);
  items = input.required<MenuItem[]>();
  sidebarVisible = model<boolean>(false);
}
