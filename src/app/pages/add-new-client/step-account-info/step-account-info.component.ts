import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';

type TeamSize = '1-1' | '2-10' | '10-50' | '50+';

@Component({
  selector: 'app-step-account-info',
  standalone: true,
  imports: [ButtonModule, RadioButtonModule, TooltipModule, InputTextModule, FloatLabelModule, FormsModule],
  templateUrl: './step-account-info.component.html',
  styleUrl: './step-account-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block md:px-8'
  }
})
export class StepAccountInfoComponent implements OnInit{
  nextCallback = input.required<any>();
  prevCallback = input.required<any>();
  chosenTeamSize = signal<TeamSize>('50+')
  teamSizes: TeamSize[] = ['1-1', '2-10', '10-50', '50+'];

  selectedPlan: any = null;

  plans = [
    {
      icon: 'pi pi-building-columns',
      title: 'Company Account',
      description: 'Use images to enhance your post flow'
    },
    {
      icon: 'pi pi-server',
      title: 'Developer Account',
      description: 'Use images to your post time'
    },
    {
      icon: 'pi pi-box',
      title: 'Testing Account',
      description: 'Use images to enhance time travel rivers'
    },
  ];

  ngOnInit() {
    this.selectedPlan = this.plans[0];
  }
}
