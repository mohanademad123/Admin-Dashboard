import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { StepAccountTypeComponent } from './step-account-type/step-account-type.component';
import { StepAccountInfoComponent } from './step-account-info/step-account-info.component';
import { StepBusinessInfoComponent } from './step-business-info/step-business-info.component';
import { StepBillingDetailsComponent } from './step-billing-details/step-billing-details.component';
import { StepCompletedComponent } from './step-completed/step-completed.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-add-new-client',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    StepAccountTypeComponent,
    StepAccountInfoComponent,
    StepBusinessInfoComponent,
    StepBillingDetailsComponent,
    StepCompletedComponent,
    NgComponentOutlet
  ],
  templateUrl: './add-new-client.component.html',
  styleUrl: './add-new-client.component.scss',
  host: {
    'class': 'block px-4 xl:px-8 pt-7 pb-2 surface-section shadow-1 border-round-lg'
  },
})
export class AddNewClientComponent {
  steps = [
    { header: 'Account Type', component: StepAccountTypeComponent },
    { header: 'Account Info', component: StepAccountInfoComponent },
    { header: 'Business Info', component: StepBusinessInfoComponent },
    { header: 'Billing Details', component: StepBillingDetailsComponent },
    { header: 'Completed', component: StepCompletedComponent }
  ];

  getInputs(index: number, nextCallback: () => void, prevCallback: () => void) {
    const inputs: any = {};

    if(index < this.steps.length - 1) {
      inputs.nextCallback = nextCallback;
    }

    if (index > 0) {
      inputs.prevCallback = prevCallback;
    }

    return inputs;
  }
}
