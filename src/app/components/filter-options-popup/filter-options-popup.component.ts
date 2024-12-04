import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-filter-options-popup',
  standalone: true,
  imports: [
    InputSwitchModule,
    OverlayPanelModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
  ],
  templateUrl: './filter-options-popup.component.html',
  styleUrl: './filter-options-popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterOptionsPopupComponent {
  status = ['All', 'Approved', 'Pending', 'In Progress', 'Rejected'];
}
