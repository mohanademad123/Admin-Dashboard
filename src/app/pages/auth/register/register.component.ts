import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { AccountService } from '../../../core/services/account/account.service';
import { Router, RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    RouterLink,
    CheckboxModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  accountService = inject(AccountService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  loading = signal(false);
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  }, {validators: this.matchPassword});

  private matchPassword(control: AbstractControl) {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');

    if(password?.value === confirmPassword?.value) {
      return null;
    } else {
      confirmPassword?.setErrors({matchPassword: 'Password and Confirm Password do not match'});
      return {matchPassword: 'Password and Confirm Password do not match'}
    }
  }

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false)

      if (this.registerForm.valid) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account created successfully' });
        this.router.navigate(['/']);
        localStorage.setItem('moDash_auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJpc3MiOiJ0ZXN0X2FwcCIsImV4cCI6MTcxNDU2NDc0MSwiaWF0IjoxNjU2NDc0NzQxfQ.Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x');
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Account creation failed' });
      }

    }, 1500);
  }
}
