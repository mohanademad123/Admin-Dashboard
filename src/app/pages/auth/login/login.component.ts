import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { AccountService } from '../../../core/services/account/account.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  accountService = inject(AccountService);
  private messageService = inject(MessageService);
  private router = inject(Router);

  loading = signal(false);
  loginForm = new FormGroup({
    email: new FormControl('admin@gmail.com', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('admin', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false)

      if (this.loginForm.valid && this.loginForm.value.email === this.accountService.contactEmail && this.loginForm.value.password === this.accountService.password) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
        this.router.navigate(['/']);
        localStorage.setItem('moDash_auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJpc3MiOiJ0ZXN0X2FwcCIsImV4cCI6MTcxNDU2NDc0MSwiaWF0IjoxNjU2NDc0NzQxfQ.Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x');
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is incorrect' });
      }

    }, 1500);
  }
}
