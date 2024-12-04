import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetsRecentCustomersComponent } from './widgets-recent-customers/widgets-recent-customers.component';
import { WidgetsRecentTransactionsComponent } from './widgets-recent-transactions/widgets-recent-transactions.component';
import { WidgetsRecentOrdersComponent } from './widgets-recent-orders/widgets-recent-orders.component';
import { WidgetsRecentUsersComponent } from './widgets-recent-users/widgets-recent-users.component';
import { WidgetsActionNeededComponent } from './widgets-action-needed/widgets-action-needed.component';
import { WidgetsSalesOverviewComponent } from './widgets-sales-overview/widgets-sales-overview.component';
import { WidgetsRecentPurchasesComponent } from './widgets-recent-purchases/widgets-recent-purchases.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [
    WidgetsRecentCustomersComponent,
    WidgetsRecentTransactionsComponent,
    WidgetsRecentOrdersComponent,
    WidgetsRecentUsersComponent,
    WidgetsActionNeededComponent,
    WidgetsSalesOverviewComponent,
    WidgetsRecentPurchasesComponent,
    NgComponentOutlet,
  ],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent {
  components = [
    WidgetsRecentCustomersComponent,
    WidgetsRecentTransactionsComponent,
    WidgetsRecentOrdersComponent,
    WidgetsRecentUsersComponent,
    WidgetsActionNeededComponent,
    WidgetsSalesOverviewComponent,
  ];
}
