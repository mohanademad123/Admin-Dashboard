import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { ThemeService } from '../core/services/theme/theme.service';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NavComponent, RouterOutlet, MainHeaderComponent, FooterComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style]': 'bgStyle()',
  },
})
export class LayoutsComponent {
  private themeService = inject(ThemeService);
  bgStyle = computed(() =>
    this.themeService.currentTheme() === 'light'
      ? `background-image: url('light_banner.jpg');`
      : `background-image: url('dark_banner.jpg');`
  );
}
