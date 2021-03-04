import { TestBed } from '@angular/core/testing';

import { PathologyService } from './pathology.service';

describe('PathologyService', () => {
  let service: PathologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
