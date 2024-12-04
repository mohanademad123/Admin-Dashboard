import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FilterOptionsPopupComponent } from "../../../components/filter-options-popup/filter-options-popup.component";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PurchasesService } from '../../../core/services/purchases/purchases.service';
import { IPurchase } from '../../../core/models/purchas.model';
import { CurrencyPipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-widgets-recent-purchases',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule , CurrencyPipe, FilterOptionsPopupComponent, ButtonModule, TableModule, TagModule],
  templateUrl: './widgets-recent-purchases.component.html',
  styleUrl: './widgets-recent-purchases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block p-4 surface-section shadow-1 border-round-lg'
  }
})
export class WidgetsRecentPurchasesComponent {
  purchasesService = inject(PurchasesService);
  selectedPurchases = signal<IPurchase[]>([]);
  titles = ['Purchase Id', 'Country', 'Date', 'Company', 'Total', 'Status', 'Actions'];

  getSeverity(value: string) {
    switch (value) {
      case 'Success':
        return 'success';
      case 'Approved':
        return 'info';
      case 'Rejected':
        return 'danger';
      case 'Pending':
        return 'warning';
      case 'In Progress':
        return 'warning';
      default:
        return 'info';
    }
  }
}
