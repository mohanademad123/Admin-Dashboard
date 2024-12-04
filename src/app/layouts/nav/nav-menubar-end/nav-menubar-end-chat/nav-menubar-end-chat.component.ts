import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ChatHeaderComponent } from '../../../../components/chat/chat-header/chat-header.component';
import { ChatBodyComponent } from '../../../../components/chat/chat-body/chat-body.component';
import { ChatFooterComponent } from '../../../../components/chat/chat-footer/chat-footer.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-nav-menubar-end-chat',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatFooterComponent,
    NgScrollbarModule
  ],
  templateUrl: './nav-menubar-end-chat.component.html',
  styleUrl: './nav-menubar-end-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenubarEndChatComponent {
  sidebarVisible = signal(false);
}
