import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ContactsService } from '../../../core/services/contacts/contacts.service';
import { IContact, IContactStatus } from '../../../core/models/contact.model';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-my-contacts-list',
  standalone: true,
  imports: [PaginatorModule, DropdownModule, FormsModule, AvatarModule, CurrencyPipe, ButtonModule],
  templateUrl: './my-contacts-list.component.html',
  styleUrl: './my-contacts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyContactsListComponent {
  contactsService = inject(ContactsService);
  selectedStatus = signal<IContactStatus>('All');
  statusOptions: IContactStatus[] = ['All', 'Online', 'Offline', 'Away']

  selectedContactsByStatus = computed(() => {
    if (this.selectedStatus() === 'All') {
      return this.contactsService.currentContacts();
    } else {
      return this.contactsService.currentContacts().filter(contact => contact.status === this.selectedStatus());
    }
  });

  paginatedContacts = signal<IContact[]>([]);
  totalRecords = computed(() => this.selectedContactsByStatus().length);
  rows = signal(12);
  first = signal(0);

  constructor() {
    effect(() => {
      if(this.selectedStatus()){
        setTimeout(() => {
          this.paginate({ first: this.first(), rows: this.rows() });
        }, 0);
      }
    })
  }

  paginate(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.paginatedContacts.set(this.selectedContactsByStatus().slice(this.first(), (this.first() + this.rows())));
  }
}
