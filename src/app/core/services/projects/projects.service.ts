import { Injectable, signal } from '@angular/core';
import { IProject } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = signal<IProject[]>([]);
  currentProjects = this.projects.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  private generateDummyData() {
    this.projects.set([
      {
        title: 'Fitnes App',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-09-15',
        budget: 284900,
        img: 'projects/1.svg',
        status: 'In Progress',
        progress: 50,
        team: [
          { name: 'John Doe', imgUrl: 'users/male8.png' },
          { name: 'Jane Smith', imgUrl: 'users/male9.png' },
          { name: 'Peter Doe', imgUrl: '' },
        ],
      },
      {
        title: 'Leaf CRM',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-09-12',
        budget: 36400,
        img: 'projects/2.svg',
        status: 'Pending',
        progress: 30,
        team: [
          { name: 'Will Ryan', imgUrl: 'users/male1.png' },
          { name: 'Kevin Doe', imgUrl: 'users/male2.png' },
        ]
      },
      {
        title: 'Atica Banking',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-09-10',
        budget: 605100,
        img: 'projects/3.svg',
        status: 'Completed',
        progress: 100,
        team: [
          { name: 'Eric Doe', imgUrl: 'users/male3.png' },
          { name: 'Jane Smith', imgUrl: 'users/male4.png' },
          { name: 'Lisa Doe', imgUrl: '' },
        ]
      },
      {
        title: '9 Degree',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-08-25',
        budget: 81800,
        img: 'projects/5.svg',
        status: 'Upcoming',
        progress: 10,
        team: [
          { name: 'Irvin Doe', imgUrl: 'users/male6.png' },
          { name: 'Sara Jones', imgUrl: '' },
          { name: 'Adam Doe', imgUrl: '' },
        ]
      },
      {
        title: 'Shopping App',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-08-15',
        budget: 71100,
        img: 'projects/6.svg',
        status: 'Completed',
        progress: 100,
        team: [
          { name: 'Kamal Oliver', imgUrl: 'users/male7.png' },
          { name: 'Wang Thomas', imgUrl: '' },
        ]
      },
      {
        title: 'Finance Dispatch',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-09-4',
        budget: 36400,
        img: 'projects/4.svg',
        status: 'In Progress',
        progress: 70,
        team: [
          { name: 'Tom Ryan', imgUrl: 'users/male5.png' },
          { name: 'Young Doe', imgUrl: '' },
        ]
      },
      {
        title: 'Buldozer CRM',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-08-01',
        budget: 12300,
        img: 'projects/7.svg',
        status: 'In Progress',
        progress: 80,
        team: [
          { name: 'Kamal Oliver', imgUrl: 'users/male8.png' },
          { name: 'Kamal Oliver', imgUrl: 'users/male9.png' },
          { name: 'Kamal Oliver', imgUrl: 'users/male10.png' },
        ]
      },
      {
        title: 'Aviasales App',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-07-23',
        budget: 97600,
        img: 'projects/8.svg',
        status: 'Pending',
        progress: 40,
        team: [
          { name: 'George Newton', imgUrl: 'users/male10.png' },
          { name: 'Emma Van', imgUrl: '' },
        ]
      },
      {
        title: 'Oppo CRM',
        description: 'CRM App application to HR efficiency',
        dueDate: '2024-07-16',
        budget: 39900,
        img: 'projects/9.svg',
        status: 'In Progress',
        progress: 90,
        team: [
          { name: 'Rebec Miller', imgUrl: 'users/male18.png' },
          { name: 'Wang Thomas', imgUrl: 'users/male19.png' },
          { name: 'Aron Ray', imgUrl: 'users/male17.png' },
        ]
      },
    ]);
  }
}
