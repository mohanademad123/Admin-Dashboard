import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('moDash_auth_token') !== null ? true : false;

  if (isAuthenticated) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/auth/login']);
    return false;
  }
};
