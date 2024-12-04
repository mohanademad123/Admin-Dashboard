import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { AvatarModule } from 'primeng/avatar';

interface INotification {
  title: string;
  description: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-dashboard-notifications',
  standalone: true,
  imports: [FilterOptionsPopupComponent, AvatarModule],
  templateUrl: './dashboard-notifications.component.html',
  styleUrl: './dashboard-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardNotificationsComponent {
  notifications: INotification[] = [
    {
      title: 'Group lunch celebration',
      description: 'Due in 2 Days',
      status: '+28%',
      color: 'yellow'
    },
    {
      title: 'Navigation optimization',
      description: 'Due in 3 Days',
      status: '+50%',
      color: 'green'
    },
    {
      title: 'Rebrand strategy planning',
      description: 'Due in 5 Days',
      status: '-27%',
      color: 'red'
    },
    {
      title: 'Product goals strategy',
      description: 'Due in 7 Days',
      status: '+8%',
      color: 'indigo'
    },
  ]
}
