import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { TimelineModule } from 'primeng/timeline';

interface Activity {
  title: string;
  time: string;
  class?: string;
}

@Component({
  selector: 'app-dashboard-activities',
  standalone: true,
  imports: [FilterOptionsPopupComponent, TimelineModule],
  templateUrl: './dashboard-activities.component.html',
  styleUrl: './dashboard-activities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 pb-1 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardActivitiesComponent {

  activities: Activity[] = [
    {
      time: '08:42',
      title: 'Outlines keep you honest. And keep structure',
      class: 'text-400'
    },
    {
      time: '10:00',
      title: 'AEOL meeting',
      class: 'text-900 font-bold'
    },
    {
      time: '14:37',
      title: 'Make deposit USD 700. to ESL',
      class: 'text-900 font-bold'
    },
    {
      time: '16:50',
      title: 'Indulging in poorly driving and keep structure keep great',
      class: 'text-400'
    },
    {
      time: '21:03',
      title: 'New order placed #XF-2356.',
      class: 'text-900 font-bold'
    },
    {
      time: '16:50',
      title: 'Indulging in poorly driving and keep structure keep great',
      class: 'text-400'
    },
    {
      time: '21:03',
      title: 'New order placed #XF-2356.',
      class: 'text-900 font-bold'
    },
    {
      time: '10:30',
      title: 'Finance KPI Mobile app launch preparion meeting',
      class: 'text-400'
    },
  ]

}
