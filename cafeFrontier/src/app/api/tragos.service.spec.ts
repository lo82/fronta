import { TestBed } from '@angular/core/testing';

import { TragosService } from './tragos.service';

describe('TragosService', () => {
  let service: TragosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TragosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
