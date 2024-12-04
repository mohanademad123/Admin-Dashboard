import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotfoundComponent {

}
