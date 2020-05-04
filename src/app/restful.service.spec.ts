import { TestBed } from '@angular/core/testing';

import { RestfulService } from './restful.service';

describe('RestfulService', () => {
  let service: RestfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
