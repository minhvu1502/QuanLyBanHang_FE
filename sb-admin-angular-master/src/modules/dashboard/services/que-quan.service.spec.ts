import { TestBed } from '@angular/core/testing';

import { QueQuanService } from './que-quan.service';

describe('QueQuanService', () => {
  let service: QueQuanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueQuanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
