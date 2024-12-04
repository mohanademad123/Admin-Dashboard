import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatService } from '../../../core/services/chat/chat.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chat-body.component.html',
  styleUrl: './chat-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBodyComponent {
  chatService = inject(ChatService);
}
