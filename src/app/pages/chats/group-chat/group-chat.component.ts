import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatContactsComponent } from '../chat-contacts/chat-contacts.component';
import { ChatHeaderComponent } from '../../../components/chat/chat-header/chat-header.component';
import { ChatFooterComponent } from '../../../components/chat/chat-footer/chat-footer.component';
import { ChatBodyComponent } from '../../../components/chat/chat-body/chat-body.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";

@Component({
  selector: 'app-group-chat',
  standalone: true,
  imports: [
    ChatContactsComponent,
    ChatHeaderComponent,
    ChatFooterComponent,
    ChatBodyComponent,
    AvatarModule,
    AvatarGroupModule,
    FilterOptionsPopupComponent
],
  templateUrl: './group-chat.component.html',
  styleUrl: './group-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'grid grid-nogutter row-gap-5'
  }
})
export class GroupChatComponent {

}
