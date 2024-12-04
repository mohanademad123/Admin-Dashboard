import { ICompany } from "./member.model";

export interface IPurchase {
  id: string;
  country: {
    name: string;
    code: string;
  },
  date: {
    date: string;
    code: string;
  },
  company: ICompany,
  total: number;
  status: string;
}