import { TestBed, inject } from '@angular/core/testing';

import { DepartUpdateService } from './depart-update.service';

describe('DepartUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartUpdateService]
    });
  });

  it('should be created', inject([DepartUpdateService], (service: DepartUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
