import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavMenubarEndUserComponent } from "./nav-menubar-end-user/nav-menubar-end-user.component";
import { NavMenubarEndThemeComponent } from "./nav-menubar-end-theme/nav-menubar-end-theme.component";
import { NavMenubarEndChatComponent } from "./nav-menubar-end-chat/nav-menubar-end-chat.component";
import { NavMenubarEndNotificationsComponent } from "./nav-menubar-end-notifications/nav-menubar-end-notifications.component";
import { NavMenubarEndSearchComponent } from "./nav-menubar-end-search/nav-menubar-end-search.component";

@Component({
  selector: 'app-nav-menubar-end',
  standalone: true,
  imports: [
    NavMenubarEndUserComponent,
    NavMenubarEndThemeComponent,
    NavMenubarEndChatComponent,
    NavMenubarEndNotificationsComponent,
    NavMenubarEndSearchComponent
],
  templateUrl: './nav-menubar-end.component.html',
  styleUrl: './nav-menubar-end.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'flex align-items-center gap-2'
  }
})
export class NavMenubarEndComponent {

}
