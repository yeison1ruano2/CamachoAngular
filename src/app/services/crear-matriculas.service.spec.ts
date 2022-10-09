import { TestBed } from '@angular/core/testing';

import { CrearMatriculasService } from './crear-matriculas.service';

describe('CrearMatriculasService', () => {
  let service: CrearMatriculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearMatriculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
