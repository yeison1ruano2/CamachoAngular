import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class MateriasinputService {
  
  constructor(private db:AngularFireDatabase) {

  }


  readMaterias(){
    return this.db.list('/materias/').valueChanges();
  }

}
