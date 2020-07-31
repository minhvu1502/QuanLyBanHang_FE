import { TestBed } from '@angular/core/testing';

import { ManageEmployeesService } from './manage-employees.service';

describe('ManageEmployeesService', () => {
  let service: ManageEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
