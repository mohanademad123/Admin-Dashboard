import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ChatService } from '../../../core/services/chat/chat.service';
import { IMessage } from '../../../core/models/chat.model';

@Component({
  selector: 'app-chat-footer',
  standalone: true,
  imports: [InputTextareaModule, ButtonModule],
  templateUrl: './chat-footer.component.html',
  styleUrl: './chat-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatFooterComponent {
  private chatService = inject(ChatService);

  onAddNewMessageToChat(textarea: HTMLTextAreaElement) {
    const message: IMessage = {
      user: this.chatService.dummyOwnData,
      msg: textarea.value,
      time: 'Just now'
    }

    this.chatService.addMessageToChat(message);
    textarea.value = '';
  }
}
