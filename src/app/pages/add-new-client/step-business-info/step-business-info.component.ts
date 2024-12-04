import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-step-business-info',
  standalone: true,
  imports: [InputTextareaModule, ButtonModule, InputTextModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './step-business-info.component.html',
  styleUrl: './step-business-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block md:px-8'
  }
})
export class StepBusinessInfoComponent {
  nextCallback = input.required<any>();
  prevCallback = input.required<any>();

  businessForm = new FormGroup({
    businessName: new FormControl('Test', [Validators.required]),
    shortenedDescriptor: new FormControl('Test', [Validators.required]),
    corporationType: new FormControl('Sole Proprietorship', [Validators.required]),
    businessDescription: new FormControl(''),
    contactEmail: new FormControl('test@test.com', [Validators.required, Validators.email]),
  });

  corporations = ['Sole Proprietorship', 'Partnership', 'S Corporation', 'Limited Liability Company', 'Limited Liability Partnership'];
}
