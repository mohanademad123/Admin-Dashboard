import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { NgScrollbarModule } from 'ngx-scrollbar';

interface RecentlySearched {
  title: string;
  id: string;
  icon: string;
}

@Component({
  selector: 'app-nav-menubar-end-search',
  standalone: true,
  imports: [
    MenuModule,
    RippleModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    NgScrollbarModule,
  ],
  templateUrl: './nav-menubar-end-search.component.html',
  styleUrl: './nav-menubar-end-search.component.scss',
})
export class NavMenubarEndSearchComponent {
  allRecentlySearched: RecentlySearched[] = [
    {
      icon: 'pi pi-desktop',
      id: '#45789',
      title: 'BoomApp by MoDash',
    },
    {
      icon: 'pi pi-gift',
      id: '#84050',
      title: 'Kept API Project Meeting',
    },
    {
      icon: 'pi pi-sitemap',
      id: '#84250',
      title: 'Monitoring App Launch',
    },
    {
      icon: 'pi pi-trophy',
      id: '#67945',
      title: 'Project Reference FAQ',
    },
    {
      icon: 'pi pi-slack',
      id: '#84250',
      title: 'FitPro App Development',
    },
    {
      icon: 'pi pi-hourglass',
      id: '#45690',
      title: 'Shopix Mobile App',
    },
    {
      icon: 'pi pi-crown',
      id: '#24005',
      title: 'Landing UI Design" Launch',
    },
  ];
}
