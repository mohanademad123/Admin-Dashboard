import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-step-completed',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './step-completed.component.html',
  styleUrl: './step-completed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block md:px-8'
  }
})
export class StepCompletedComponent {
  prevCallback = input.required<any>();
}
