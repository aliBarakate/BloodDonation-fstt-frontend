import { TestBed } from '@angular/core/testing';

import { ReceveurService } from './receveur.service';

describe('ReceveurService', () => {
  let service: ReceveurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceveurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
