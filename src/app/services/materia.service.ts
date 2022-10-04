import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private firebase:AngularFireDatabase) {
  }

  agregarMateria(materia:any){
    return this.firebase.createPushId();
  }
}
