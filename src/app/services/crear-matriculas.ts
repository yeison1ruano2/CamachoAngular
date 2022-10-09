import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrearMatriculasService {

  constructor(public db:AngularFireDatabase) { }


  getIdMatricula(){
    const d=this.db.list('');
  }
}
