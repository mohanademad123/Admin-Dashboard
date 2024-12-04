import { Injectable, signal } from '@angular/core';
import { IPurchase } from '../../models/purchas.model';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  private purchases = signal<IPurchase[]>([]);
  currentPurchases = this.purchases.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  private generateDummyData() {
    this.purchases.set([
      {
        id: '56037-XDER',
        country: {
          name: 'Germany',
          code: 'DE',
        },
        date: {
          date: '05/28/2024',
          code: 'Paid',
        },
        company: {
          name: 'Intertico',
          service: 'Web, UI/UX Design',
        },
        total: 3560,
        status: 'Approved',
      },
      {
        id: '92839-FDER',
        country: {
          name: 'Brazil',
          code: 'BR',
        },
        date: {
          date: '04/18/2024',
          code: 'Paid',
        },
        company: {
          name: 'Agoda',
          service: 'Houses & Hotels',
        },
        total: 4850,
        status: 'In Progress',
      },
      {
        id: '44721-QREX',
        country: {
          name: 'Argentina',
          code: 'AR',
        },
        date: {
          date: '07/23/2024',
          code: 'Paid',
        },
        company: {
          name: 'RoadGee',
          service: 'Transportation',
        },
        total: 8376,
        status: 'Success',
      },
      {
        id: '00347-BCLQ',
        country: {
          name: 'Turkey',
          code: 'TR',
        },
        date: {
          date: '12/21/2024',
          code: 'Paid',
        },
        company: {
          name: 'The Hill',
          service: 'Insurance',
        },
        total: 9486,
        status: 'Rejected',
      },
      {
        id: '59486-XDER',
        country: {
          name: 'Oman',
          code: 'OM',
        },
        date: {
          date: '11/01/2024',
          code: 'Paid',
        },
        company: {
          name: 'Phillipines',
          service: 'Real Estate',
        },
        total: 9486,
        status: 'Approved',
      },
      {
        id: '76254-ABCD',
        country: {
          name: 'Canada',
          code: 'CA',
        },
        date: {
          date: '03/15/2024',
          code: 'Pending',
        },
        company: {
          name: 'MapleCorp',
          service: 'Software Development',
        },
        total: 5200,
        status: 'In Progress',
      },
      {
        id: '82341-QWER',
        country: {
          name: 'Japan',
          code: 'JP',
        },
        date: {
          date: '06/30/2024',
          code: 'Paid',
        },
        company: {
          name: 'TechnoWorks',
          service: 'AI Solutions',
        },
        total: 7350,
        status: 'Approved',
      },
      {
        id: '54672-XYPL',
        country: {
          name: 'Australia',
          code: 'AU',
        },
        date: {
          date: '01/10/2024',
          code: 'Pending',
        },
        company: {
          name: 'DownUnder Inc.',
          service: 'Mining & Resources',
        },
        total: 9120,
        status: 'Rejected',
      },
      {
        id: '99347-LMNO',
        country: {
          name: 'South Africa',
          code: 'ZA',
        },
        date: {
          date: '09/12/2024',
          code: 'Paid',
        },
        company: {
          name: 'GreenPower',
          service: 'Renewable Energy',
        },
        total: 11000,
        status: 'Success',
      },
      {
        id: '18452-JKLZ',
        country: {
          name: 'Mexico',
          code: 'MX',
        },
        date: {
          date: '08/02/2024',
          code: 'Paid',
        },
        company: {
          name: 'CactusTech',
          service: 'Agricultural Tech',
        },
        total: 4200,
        status: 'Approved',
      },
      {
        id: '43762-UVWX',
        country: {
          name: 'India',
          code: 'IN',
        },
        date: {
          date: '11/25/2024',
          code: 'Paid',
        },
        company: {
          name: 'InfoSphere',
          service: 'IT Services',
        },
        total: 9800,
        status: 'In Progress',
      },
      {
        id: '74620-PQRS',
        country: {
          name: 'United Kingdom',
          code: 'GB',
        },
        date: {
          date: '05/18/2024',
          code: 'Paid',
        },
        company: {
          name: 'RoyalServices',
          service: 'Consulting',
        },
        total: 6700,
        status: 'Success',
      },
      {
        id: '61874-TYUI',
        country: {
          name: 'New Zealand',
          code: 'NZ',
        },
        date: {
          date: '07/20/2024',
          code: 'Pending',
        },
        company: {
          name: 'KiwiInnovations',
          service: 'Product Development',
        },
        total: 5400,
        status: 'Rejected',
      },
      {
        id: '98342-ASDF',
        country: {
          name: 'France',
          code: 'FR',
        },
        date: {
          date: '10/05/2024',
          code: 'Paid',
        },
        company: {
          name: 'LaMode',
          service: 'Fashion & Retail',
        },
        total: 7600,
        status: 'Approved',
      },
      {
        id: '71243-ZXCV',
        country: {
          name: 'Italy',
          code: 'IT',
        },
        date: {
          date: '12/15/2024',
          code: 'Pending',
        },
        company: {
          name: 'GustoItalia',
          service: 'Food & Beverage',
        },
        total: 8200,
        status: 'In Progress',
      },
    ]);
  }
}
