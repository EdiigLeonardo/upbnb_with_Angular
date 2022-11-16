import { TestBed } from '@angular/core/testing';

import { UpbnbService } from './upbnb.service';

describe('UpbnbService', () => {
  let service: UpbnbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpbnbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
