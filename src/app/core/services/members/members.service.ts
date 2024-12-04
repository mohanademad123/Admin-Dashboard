import { Injectable, signal } from '@angular/core';
import { IMember } from '../../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private members = signal<IMember[]>([]);
  currentMembers = this.members.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  private generateDummyData() {
    this.members.set([
      {
        author: {
          name: 'Max Smith',
          imgUrl: 'users/male6.png',
          jobTitle: 'HTML, JS, ReactJS'
        },
        company: {
          name: 'Intertico',
          service: 'Web, UI/UX Design'
        },
        progress: 50
      },
      {
        author: {
          name: 'Henry Baird',
          imgUrl: 'users/male7.png',
          jobTitle: 'C#, ASP.NET, MS SQL'
        },
        company: {
          name: 'Agoda',
          service: 'Houses & Hotels'
        },
        progress: 70
      },
      {
        author: {
          name: 'Lebron Wayde',
          imgUrl: 'users/male8.png',
          jobTitle: 'PHP, Laravel, VueJS'
        },
        company: {
          name: 'RoadGee',
          service: 'Transportation'
        },
        progress: 60
      },
      {
        author: {
          name: 'Kevin West',
          imgUrl: 'users/male9.png',
          jobTitle: 'Python, PostgreSQL, ReactJS'
        },
        company: {
          name: 'The Hill',
          service: 'Insurance'
        },
        progress: 50
      },
      {
        author: {
          name: 'Walter White',
          imgUrl: 'users/male10.png',
          jobTitle: 'HTML, JS, ReactJS'
        },
        company: {
          name: 'RoadGee',
          service: 'Art Director'
        },
        progress: 90
      },
    ])
  }
}
