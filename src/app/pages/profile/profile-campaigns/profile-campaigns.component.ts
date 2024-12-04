import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DecimalPipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CampaignsService } from '../../../core/services/campaigns/campaigns.service';
import { FilterOptionsPopupComponent } from '../../../components/filter-options-popup/filter-options-popup.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-profile-campaigns',
  standalone: true,
  imports: [
    AvatarModule,
    ButtonModule,
    NgClass,
    TooltipModule,
    FilterOptionsPopupComponent,
    DecimalPipe,
    AnimateOnScrollModule
  ],
  templateUrl: './profile-campaigns.component.html',
  styleUrl: './profile-campaigns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCampaignsComponent {
  campaignsService = inject(CampaignsService);
}
