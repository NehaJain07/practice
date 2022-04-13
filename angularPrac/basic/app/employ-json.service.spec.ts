import { TestBed } from '@angular/core/testing';

import { EmployJsonService } from './employ-json.service';

describe('EmployJsonService', () => {
  let service: EmployJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
