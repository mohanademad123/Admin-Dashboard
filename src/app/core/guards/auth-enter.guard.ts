import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authEnterGuard: CanActivateFn = (route, state) => {
  const isAuthenticated =
    localStorage.getItem('moDash_auth_token') !== null ? true : false;

  if (isAuthenticated) {
    const location = inject(Location);
    location.back();
    return false;
  };

  return true;
};
