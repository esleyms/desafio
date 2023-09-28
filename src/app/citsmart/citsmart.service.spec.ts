import { TestBed } from '@angular/core/testing';

import { CitsmartService } from './citsmart.service';

describe('CitsmartService', () => {
  let service: CitsmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitsmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
