import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../filter-options-popup/filter-options-popup.component";
import { ChatService } from '../../../core/services/chat/chat.service';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [FilterOptionsPopupComponent],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatHeaderComponent {
  chatService = inject(ChatService);
}
