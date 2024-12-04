export interface ICampaign {
  img: string;
  title: string;
  count: number;
  status: {
    percentage: string;
    description: string;
  };
  info: {
    percentage: string;
    description: string;
  }
}