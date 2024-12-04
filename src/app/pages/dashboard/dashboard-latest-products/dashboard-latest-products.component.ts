import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface IProduct {
  name: string;
  imgUrl: string;
  date: string;
  price: number,
  orderId: string;
  payment: 'Done' | 'Pending';
}

@Component({
  selector: 'app-dashboard-latest-products',
  standalone: true,
  imports: [ButtonModule, CurrencyPipe, TableModule, AvatarModule, TagModule],
  templateUrl: './dashboard-latest-products.component.html',
  styleUrl: './dashboard-latest-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'p-4 border-round-lg shadow-1 surface-section'
  }
})
export class DashboardLatestProductsComponent {
  timePeriod = signal<'month' | 'week' | 'day'>('month');

  get filteredProducts(): IProduct[] {
    if(this.timePeriod() === 'month') {
      return this.products;
    } else if(this.timePeriod() === 'week') {
      return this.products.slice(0, 3).reverse();
    } else {
      return this.products.slice(0, 4).reverse();
    }
  }

  private products: IProduct[] = [
    {
      name: 'Apple MacBook Pro 13',
      imgUrl: 'products/product-1.png',
      date: 'Oct 8, 2024',
      price: 1200,
      orderId: '#787669',
      payment: 'Done'
    },
    {
      name: 'PS5 DualSense Charging',
      imgUrl: 'products/product-2.png',
      date: 'Feb 10, 2024',
      price: 600,
      orderId: '#749U8F',
      payment: 'Pending'
    },
    {
      name: 'Chair Black',
      imgUrl: 'products/product-3.png',
      date: 'Jan 4, 2024',
      price: 1500,
      orderId: '#509478',
      payment: 'Done'
    },
    {
      name: 'TV LED 32 inch',
      imgUrl: 'products/product-4.png',
      date: 'Aug 22, 2024',
      price: 3000,
      orderId: '#127a69',
      payment: 'Pending'
    },
    {
      name: 'Iphone 15 Pro Max',
      imgUrl: 'products/product-5.png',
      date: 'Sep 8, 2024',
      price: 5999,
      orderId: '#487010',
      payment: 'Done'
    },
  ]
}
