import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-step-account-type',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  templateUrl: './step-account-type.component.html',
  styleUrl: './step-account-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block md:px-8'
  }
})
export class StepAccountTypeComponent {
  nextCallback = input.required<any>();
  chosenType = signal<'personal' | 'corporate'>('personal');
}
