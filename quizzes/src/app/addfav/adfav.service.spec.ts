import { TestBed } from '@angular/core/testing';

import { AdfavService } from './adfav.service';

describe('AdfavService', () => {
  let service: AdfavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdfavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
