import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../../../core/services/theme/theme.service';

@Component({
  selector: 'app-nav-menubar-end-theme',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './nav-menubar-end-theme.component.html',
  styleUrl: './nav-menubar-end-theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenubarEndThemeComponent implements OnInit {
  themeService = inject(ThemeService);
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Light',
        icon: 'pi pi-sun',
        command: () => {
          this.themeService.setTheme('light');
        },
      },
      {
        label: 'Dark',
        icon: 'pi pi-moon',
        command: () => {
          this.themeService.setTheme('dark');
        },
      },
    ];
  }
}
