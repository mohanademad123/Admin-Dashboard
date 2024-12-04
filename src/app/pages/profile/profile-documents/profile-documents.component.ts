import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-profile-documents',
  standalone: true,
  imports: [
    ButtonModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    AnimateOnScrollModule
  ],
  templateUrl: './profile-documents.component.html',
  styleUrl: './profile-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDocumentsComponent {
  folders = [
    {
      name: 'Finance',
      files: 7,
    },
    {
      name: 'Customers',
      files: 3,
    },
    {
      name: 'CRM Project',
      files: 14,
    },
  ];

  files = [
    {
      name: 'Project Reqs..',
      img: 'documents/pdf.svg',
      time: '2 days ago',
    },
    {
      name: 'CRM App Docs..',
      img: 'documents/doc.svg',
      time: '4 days ago',
    },
    {
      name: 'User CRUD Styles',
      img: 'documents/css.svg',
      time: '6 days ago',
    },
    {
      name: 'AI Document',
      img: 'documents/ai.svg',
      time: '1 week ago',
    },
    {
      name: 'Orders backup',
      img: 'documents/sql.svg',
      time: '2 week ago',
    },
    {
      name: 'UTAIR CRM API Co..',
      img: 'documents/xml.svg',
      time: '3 week ago',
    },
    {
      name: 'Tower Hill App..',
      img: 'documents/tif.svg',
      time: '1 month ago',
    },
  ];
}
