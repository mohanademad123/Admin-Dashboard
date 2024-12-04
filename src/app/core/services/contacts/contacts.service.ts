import { Injectable, signal } from '@angular/core';
import { IContact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts = signal<IContact[]>([]);
  currentContacts = this.contacts.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  generateDummyData() {
    this.contacts.set([
      {
        name: 'Max Smith',
        email: 'max@example.com',
        jobTitle: 'Software Engineer',
        avgEarnings: 14560,
        totalSales: 236400,
        profilePictureUrl: 'users/male6.png',
        status: 'Online',
        unreadMessageCount: 0,
        lastMessageTimestamp: '3 min',
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        jobTitle: 'Product Manager',
        avgEarnings: 18900,
        totalSales: 300000,
        profilePictureUrl: '',
        status: 'Offline',
        unreadMessageCount: 0,
        lastMessageTimestamp: '2 hrs',
      },
      {
        name: 'David Lee',
        email: 'david@example.com',
        jobTitle: 'UX Designer',
        avgEarnings: 12000,
        totalSales: 200000,
        profilePictureUrl: 'users/male7.png',
        status: 'Away',
        unreadMessageCount: 5,
        lastMessageTimestamp: '5 hrs',
      },
      {
        name: 'Michael Brown',
        email: 'michael@example.com',
        jobTitle: 'DevOps Engineer',
        avgEarnings: 15500,
        totalSales: 220000,
        profilePictureUrl: 'users/male8.png',
        status: 'Online',
        unreadMessageCount: 3,
        lastMessageTimestamp: '12 hrs',
      },
      {
        name: 'Emily Davis',
        email: 'emily@example.com',
        jobTitle: 'Data Scientist',
        avgEarnings: 16500,
        totalSales: 250000,
        profilePictureUrl: '',
        status: 'Away',
        unreadMessageCount: 0,
        lastMessageTimestamp: '20 hrs',
      },
      {
        name: 'Chris Evans',
        email: 'chris@example.com',
        jobTitle: 'IT Support',
        avgEarnings: 11200,
        totalSales: 180000,
        profilePictureUrl: 'users/male9.png',
        status: 'Online',
        unreadMessageCount: 0,
        lastMessageTimestamp: '1 day',
      },
      {
        name: 'Jessica Wilson',
        email: 'jessica@example.com',
        jobTitle: 'Marketing Specialist',
        avgEarnings: 13000,
        totalSales: 210000,
        profilePictureUrl: '',
        status: 'Away',
        unreadMessageCount: 9,
        lastMessageTimestamp: '3 days',
      },
      {
        name: 'Frankie Turner',
        email: 'frankie@example.com',
        jobTitle: 'HR Manager',
        avgEarnings: 14800,
        totalSales: 230000,
        profilePictureUrl: 'users/male10.png',
        status: 'Online',
        unreadMessageCount: 4,
        lastMessageTimestamp: '5 days',
      },
      {
        name: 'James Green',
        email: 'james@example.com',
        jobTitle: 'Backend Developer',
        avgEarnings: 14000,
        totalSales: 225000,
        profilePictureUrl: 'users/male12.png',
        status: 'Away',
        unreadMessageCount: 8,
        lastMessageTimestamp: '1 week',
      },
      {
        name: 'Tom Allen',
        email: 'tom@example.com',
        jobTitle: 'Content Writer',
        avgEarnings: 11000,
        totalSales: 175000,
        profilePictureUrl: 'users/male13.png',
        status: 'Online',
        unreadMessageCount: 1,
        lastMessageTimestamp: '2 weeks',
      },
      {
        name: 'Daniel Harris',
        email: 'daniel@example.com',
        jobTitle: 'Project Manager',
        avgEarnings: 17000,
        totalSales: 260000,
        profilePictureUrl: 'users/male15.png',
        status: 'Online',
        unreadMessageCount: 7,
        lastMessageTimestamp: '3 weeks',
      },
      {
        name: 'Joseph Evans',
        email: 'joseph@example.com',
        jobTitle: 'Graphic Designer',
        avgEarnings: 12500,
        totalSales: 190000,
        profilePictureUrl: 'users/male16.png',
        status: 'Offline',
        unreadMessageCount: 0,
        lastMessageTimestamp: '1 month',
      },
    ]);
  }
}
