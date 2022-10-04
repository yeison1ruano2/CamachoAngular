import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMatriculasComponent } from './crear-matriculas.component';

describe('CrearMatriculasComponent', () => {
  let component: CrearMatriculasComponent;
  let fixture: ComponentFixture<CrearMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMatriculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
