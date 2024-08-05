import { TestBed } from '@angular/core/testing';

import { TotaldiaService } from './totaldia.service';

describe('TotaldiaService', () => {
  let service: TotaldiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotaldiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
