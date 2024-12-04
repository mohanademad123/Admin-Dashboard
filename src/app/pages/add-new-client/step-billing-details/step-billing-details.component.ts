import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-step-billing-details',
  standalone: true,
  imports: [ButtonModule,InputSwitchModule ,InputMaskModule, InputTextModule, ReactiveFormsModule, TooltipModule,InputIconModule, IconFieldModule],
  templateUrl: './step-billing-details.component.html',
  styleUrl: './step-billing-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block md:px-8'
  }
})
export class StepBillingDetailsComponent {
  nextCallback = input.required<any>();
  prevCallback = input.required<any>();

  billingForm = new FormGroup({
    nameOnCard: new FormControl('Test Name', [Validators.required]),
    cardNumber: new FormControl('1234 5678 9012 3456', [Validators.required, Validators.pattern(/\d{4}\s\d{4}\s\d{4}\s\d{4}/)]),
    expirationDate: new FormControl('11 / 25', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\s\/\s([0-9][0-9])$/)]),
    cvc: new FormControl('123', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]),
    saveCard: new FormControl(true)
  });
}
