import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';

interface Todo {
  title: string;
  description: string;
  tagSeverity: TagSeverity;
  barColor: string;
}

export type TagSeverity = "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined

@Component({
  selector: 'app-dashboard-todo',
  standalone: true,
  imports: [FilterOptionsPopupComponent, CheckboxModule, TagModule],
  templateUrl: './dashboard-todo.component.html',
  styleUrl: './dashboard-todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardTodoComponent {
  todoList: Todo[] = [
    {
      title: 'Meeting with CEO',
      description: 'Due in 2 Days',
      tagSeverity: 'success',
      barColor: 'green'
    },
    {
      title: 'Create FireStone Logo',
      description: 'Due in 3 Days',
      tagSeverity: undefined,
      barColor: 'primary'
    },
    {
      title: 'Scoping & Estimations',
      description: 'Due in 5 Days',
      tagSeverity: 'warning',
      barColor: 'yellow'
    },
    {
      title: 'KPI App Showcase',
      description: 'Due in 2 Days',
      tagSeverity: undefined,
      barColor: 'primary'
    },
    {
      title: 'Project Meeting',
      description: 'Due in 11 Days',
      tagSeverity: 'danger',
      barColor: 'red'
    },
    {
      title: 'Customers Update',
      description: 'Due in 1 Week',
      tagSeverity: 'success',
      barColor: 'green'
    },
  ]
}
