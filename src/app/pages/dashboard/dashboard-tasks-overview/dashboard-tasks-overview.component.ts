import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { TagModule } from 'primeng/tag';

interface ITask {
  title: string
  description: string
  color: string,
  duration: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard-tasks-overview',
  standalone: true,
  imports: [FilterOptionsPopupComponent, TagModule],
  templateUrl: './dashboard-tasks-overview.component.html',
  styleUrl: './dashboard-tasks-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardTasksOverviewComponent {

  tasks: ITask[] = [
    {
      title: 'Project Briefing',
      description: 'Project Manager',
      color: 'green',
      duration: '2 days',
      icon: 'icons/icon1.svg'
    },
    {
      title: 'Concept Design',
      description: 'Art Director',
      color: 'yellow',
      duration: '5 days',
      icon: 'icons/icon2.svg'
    },
    {
      title: 'Functional Logics',
      description: 'Lead Developer',
      color: 'blue',
      duration: '1 week',
      icon: 'icons/icon3.svg'
    },
    {
      title: 'Development',
      description: 'DevOps',
      color: 'red',
      duration: '2 weeks',
      icon: 'icons/icon4.svg'
    },
    {
      title: 'Testing',
      description: 'QA Managers',
      color: 'indigo',
      duration: '1 month',
      icon: 'icons/icon5.svg'
    },
  ]
}
