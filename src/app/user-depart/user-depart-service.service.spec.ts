import { TestBed, inject } from '@angular/core/testing';

import { UserDepartServiceService } from './user-depart-service.service';

describe('UserDepartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDepartServiceService]
    });
  });

  it('should be created', inject([UserDepartServiceService], (service: UserDepartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
