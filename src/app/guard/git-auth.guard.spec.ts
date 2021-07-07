import { TestBed } from '@angular/core/testing';

import { GitAuthGuard } from './git-auth.guard';

describe('GitAuthGuard', () => {
  let guard: GitAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GitAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
