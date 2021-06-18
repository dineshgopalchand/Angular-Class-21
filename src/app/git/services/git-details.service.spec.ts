import { TestBed } from '@angular/core/testing';

import { GitDetailsService } from './git-details.service';

describe('GitDetailsService', () => {
  let service: GitDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
