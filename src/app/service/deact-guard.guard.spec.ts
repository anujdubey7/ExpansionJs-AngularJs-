import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deactGuardGuard } from './deact-guard.guard';

describe('deactGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deactGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
