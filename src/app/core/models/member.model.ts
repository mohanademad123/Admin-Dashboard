export interface IMember {
  author: IAuthor,
  company: ICompany;
  progress: number;
}

export interface IAuthor {
  name: string;
  imgUrl: string;
  jobTitle: string;
}

export interface ICompany {
  name: string;
  service: string;
}