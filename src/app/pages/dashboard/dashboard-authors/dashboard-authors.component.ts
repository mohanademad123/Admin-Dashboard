import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { AvatarModule } from 'primeng/avatar';

interface IAuthor {
  name: string;
  image: string;
  skill: string;
}

@Component({
  selector: 'app-dashboard-authors',
  standalone: true,
  imports: [FilterOptionsPopupComponent, AvatarModule],
  templateUrl: './dashboard-authors.component.html',
  styleUrl: './dashboard-authors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardAuthorsComponent {
  authors: IAuthor[] = [
    {
      name: 'John Doe',
      image: 'users/male13.png',
      skill: 'Project Manager'
    },
    {
      name: 'Kevin Doe',
      image: 'users/male2.png',
      skill: 'PHP, SQLite, Artisan CLI'
    },
    {
      name: 'Sean Bean',
      image: 'users/male3.png',
      skill: 'Angular, Ionic, Bootstrap'
    },
    {
      name: 'Francis Mitch',
      image: 'users/male18.png',
      skill: 'User Experience Designer'
    },
    {
      name: 'Robert Smith',
      image: 'users/male5.png',
      skill: 'Java, Spring Boot'
    },
  ]
}
