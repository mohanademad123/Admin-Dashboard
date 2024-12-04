import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ContactsService } from '../../../core/services/contacts/contacts.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-contacts',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    AvatarModule,
  ],
  templateUrl: './chat-contacts.component.html',
  styleUrl: './chat-contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatContactsComponent {
  contactsService = inject(ContactsService);
  searchTerm = signal('');

  filteredContacts = computed(() =>
    this.contactsService.currentContacts().filter((contact) => {
      return (
        contact.name.toLowerCase().includes(this.searchTerm().toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    })
  );
}
