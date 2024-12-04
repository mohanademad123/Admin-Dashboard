import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { IProject, IProjectStatus } from '../../../core/models/project.model';
import { ProjectsService } from '../../../core/services/projects/projects.service';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-profile-projects',
  standalone: true,
  imports: [
    PaginatorModule,
    DropdownModule,
    FormsModule,
    AvatarModule,
    ButtonModule,
    TagModule,
    CurrencyPipe,
    DatePipe,
    NgClass,
    TooltipModule,
    AnimateOnScrollModule
  ],
  templateUrl: './profile-projects.component.html',
  styleUrl: './profile-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileProjectsComponent {
  projectsService = inject(ProjectsService);
  selectedStatus = signal<IProjectStatus>('All');
  statusOptions: IProjectStatus[] = ['All', 'In Progress', 'Completed', 'Upcoming', 'Pending'];

  selectedProjectsByStatus = computed(() => {
    if (this.selectedStatus() === 'All') {
      return this.projectsService.currentProjects();
    } else {
      return this.projectsService.currentProjects().filter(project => project.status === this.selectedStatus());
    }
  });

  paginatedProjects = signal<IProject[]>([]);
  totalRecords = computed(() => this.selectedProjectsByStatus().length);
  rows = signal(9);
  first = signal(0);

  constructor() {
    effect(() => {
      if(this.selectedStatus()){
        setTimeout(() => {
          this.paginate({ first: this.first(), rows: this.rows() });
        }, 0);
      }
    })
  }

  paginate(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.paginatedProjects.set(this.selectedProjectsByStatus().slice(this.first(), (this.first() + this.rows())));
  }

  getSeverity(status: IProjectStatus) {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return undefined;
      case 'Upcoming':
        return 'danger';
      case 'Pending':
        return 'warning';
      default:
        return undefined;
    }
  }; test = 'campaign'
}
