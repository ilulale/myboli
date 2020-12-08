import { TestBed } from '@angular/core/testing';

import { BoliService } from './boli.service';

describe('BoliService', () => {
  let service: BoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
