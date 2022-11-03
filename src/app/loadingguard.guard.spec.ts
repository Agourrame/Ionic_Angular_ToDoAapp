import { TestBed } from '@angular/core/testing';

import { LoadingguardGuard } from './loadingguard.guard';

describe('LoadingguardGuard', () => {
  let guard: LoadingguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadingguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
