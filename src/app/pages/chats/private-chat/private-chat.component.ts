import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatContactsComponent } from '../chat-contacts/chat-contacts.component';
import { ChatHeaderComponent } from '../../../components/chat/chat-header/chat-header.component';
import { ChatFooterComponent } from '../../../components/chat/chat-footer/chat-footer.component';
import { ChatBodyComponent } from '../../../components/chat/chat-body/chat-body.component';

@Component({
  selector: 'app-private-chat',
  standalone: true,
  imports: [
    ChatContactsComponent,
    ChatHeaderComponent,
    ChatFooterComponent,
    ChatBodyComponent,
  ],
  templateUrl: './private-chat.component.html',
  styleUrl: './private-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid grid-nogutter row-gap-5',
  }
})
export class PrivateChatComponent {}
