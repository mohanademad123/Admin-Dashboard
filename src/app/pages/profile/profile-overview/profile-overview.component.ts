import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverviewPostComponent } from "./overview-post/overview-post.component";
import { PostsService } from '../../../core/services/posts/posts.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [OverviewPostComponent, AnimateOnScrollModule],
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileOverviewComponent {
  postsService = inject(PostsService);
}
