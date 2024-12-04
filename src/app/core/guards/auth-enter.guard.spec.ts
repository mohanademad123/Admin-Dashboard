import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authEnterGuard } from './auth-enter.guard';

describe('authEnterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authEnterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
