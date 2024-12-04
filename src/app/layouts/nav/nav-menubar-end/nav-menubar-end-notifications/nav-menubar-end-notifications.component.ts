import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';

interface Notification {
  imgUrl: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-nav-menubar-end-notifications',
  standalone: true,
  imports: [
    MenuModule,
    RippleModule,
    ButtonModule,
    TagModule,
    BadgeModule
  ],
  templateUrl: './nav-menubar-end-notifications.component.html',
  styleUrl: './nav-menubar-end-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenubarEndNotificationsComponent  {
  notifications: Notification[] = [
    {
      imgUrl: 'users/male1.png',
      title: 'Roman Joined thess Team!',
      description: 'Congratulate him'
    },
    {
      imgUrl: 'users/male2.png',
      title: 'New message received',
      description: 'Jack sent you new message'
    },
    {
      imgUrl: 'users/male3.png',
      title: 'New Payment received',
      description: 'Check your earnings'
    },
    {
      imgUrl: 'users/male4.png',
      title: 'Jolly completed tasks',
      description: 'Assign her new tasks'
    },
    {
      imgUrl: 'users/male5.png',
      title: 'Roman Joined the Team!',
      description: 'Congratulate him'
    },

  ]
}
