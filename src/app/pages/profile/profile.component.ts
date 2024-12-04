import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserHeaderComponent } from "../../components/user-header/user-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserHeaderComponent, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  links = [
    {name: 'Overview', link: '/profile/overview'},
    {name: 'Projects', link: '/profile/projects'},
    {name: 'Campaigns', link: '/profile/campaigns'},
    {name: 'Documents', link: '/profile/documents'},
  ]
}
