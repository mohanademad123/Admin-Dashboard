import { inject, Injectable, signal } from '@angular/core';
import { AccountService } from '../account/account.service';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accountService = inject(AccountService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  isAuthenticated = signal(false);

  login(email: string, password: string) {
    if (email === this.accountService.contactEmail && password === this.accountService.password) {
      this.toastService.showMessage('success', 'Success', 'Login successful' );
      this.router.navigate(['/']);
      localStorage.setItem('moDash_auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJpc3MiOiJ0ZXN0X2FwcCIsImV4cCI6MTcxNDU2NDc0MSwiaWF0IjoxNjU2NDc0NzQxfQ.Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x');
    } else {
      this.toastService.showMessage('error', 'Error', 'Email or password is incorrect' );
    }
  }

  register(email: string, password: string) {
    if (email && password) {
      this.toastService.showMessage('success', 'Success', 'Account created successfully');
      this.router.navigate(['/']);
      localStorage.setItem('moDash_auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJpc3MiOiJ0ZXN0X2FwcCIsImV4cCI6MTcxNDU2NDc0MSwiaWF0IjoxNjU2NDc0NzQxfQ.Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x_Q7w0x');
    } else {
      this.toastService.showMessage('error', 'Error', 'Account creation failed');
    }
  }

  logout() {
    localStorage.removeItem('moDash_auth_token');
    this.router.navigate(['/auth/login']);
  }
}
