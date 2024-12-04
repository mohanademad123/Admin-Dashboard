export interface IContact {
  name: string;
  email: string;
  jobTitle: string;
  avgEarnings: number;
  totalSales: number;
  profilePictureUrl: string;
  status: IContactStatus;
  unreadMessageCount: number;
  lastMessageTimestamp?: string;
}

export type IContactStatus = 'All' | 'Online' | 'Away' | 'Offline';
