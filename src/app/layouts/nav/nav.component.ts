import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { NavMenubarEndComponent } from "./nav-menubar-end/nav-menubar-end.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenubarModule,
    RippleModule,
    NgClass,
    RouterLink,
    NavSidebarComponent,
    ButtonModule,
    NavMenubarEndComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent  implements OnInit{
  items!: MenuItem[];
  sidebarVisible = signal(false);

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-objects-column',
        routerLink: '/'
      },
      {
        label: 'Widgets',
        icon: 'pi pi-star',
        routerLink: '/widgets'
      },
      {
        label: 'Add New Client',
        icon: 'pi pi-sparkles',
        routerLink: '/add-new-client'
      },
      {
        label: 'Chat',
        icon: 'pi pi-send',
        items: [
          {
            label: 'Private Chat',
            icon: 'pi pi-angle-double-right',
            routerLink: '/chat/private-chat'
          },
          {
            label: 'Group Chat',
            icon: 'pi pi-angle-double-right',
            routerLink: '/chat/group-chat'
          },
          {
            label: 'My Contacts',
            icon: 'pi pi-angle-double-right',
            routerLink: '/chat/my-contacts'
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Overview',
            icon: 'pi pi-angle-double-right',
            routerLink: '/profile/overview'
          },
          {
            label: 'Projects',
            icon: 'pi pi-angle-double-right',
            routerLink: '/profile/projects'
          },
          {
            label: 'Campaigns',
            icon: 'pi pi-angle-double-right',
            routerLink: '/profile/campaigns'
          },
          {
            label: 'Documents',
            icon: 'pi pi-angle-double-right',
            routerLink: '/profile/documents'
          },
        ],
      },
    ];
  }

  openSidebar() {
    this.sidebarVisible.set(true);
  }
}
