import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatriculasComponent } from './list-matriculas.component';

describe('ListMatriculasComponent', () => {
  let component: ListMatriculasComponent;
  let fixture: ComponentFixture<ListMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatriculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
