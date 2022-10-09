import { TestBed } from '@angular/core/testing';

import { MateriasinputService } from './materiasinput.services';

describe('MateriasinputService', () => {
  let service: MateriasinputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasinputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
