import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IPost } from '../../../../core/models/post.model';
import { DatePipe } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { FilterOptionsPopupComponent } from "../../../../components/filter-options-popup/filter-options-popup.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-overview-post',
  standalone: true,
  imports: [InputTextModule ,ButtonModule, DatePipe, AvatarModule, FilterOptionsPopupComponent],
  templateUrl: './overview-post.component.html',
  styleUrl: './overview-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 surface-section shadow-1 border-round animation-duration-200',
  }
})
export class OverviewPostComponent {
  post = input.required<IPost>();
}
