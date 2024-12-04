import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MembersService } from '../../../core/services/members/members.service';
import { IMember } from '../../../core/models/member.model';
import { AvatarModule } from 'primeng/avatar';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-dashboard-members',
  standalone: true,
  imports: [ButtonModule, TableModule, AvatarModule, ProgressBarModule],
  templateUrl: './dashboard-members.component.html',
  styleUrl: './dashboard-members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardMembersComponent {
  membersService = inject(MembersService);
  selectedMembers = signal<IMember[]>([]);
}
