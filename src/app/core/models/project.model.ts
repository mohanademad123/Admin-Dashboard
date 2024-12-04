export interface IProject {
  title: string;
  description: string;
  dueDate: string;
  budget: number;
  img: string;
  status: IProjectStatus;
  progress: number;
  team: { name: string; imgUrl: string }[];
}

export type IProjectStatus = 'All' | 'Completed' | 'In Progress' | 'Upcoming' | 'Pending';
