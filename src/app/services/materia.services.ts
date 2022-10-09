import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.services';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(
    private httpClient: HttpClient,
    public db:AngularFireDatabase) 
    {
  
    }

  agregarMateria(payload:any){
    const dbRef=this.db.list('/materias')
    dbRef.push(payload).then((userCredential)=>{
      const user=userCredential.key;
      payload.id=userCredential.key;
      this.db.object('/materias/' + `${payload.id}`).update(payload);
      console.log(user);
    }).catch((error)=>{
      console.log(error);
    });
  }

  readMaterias(){
    return this.db.list('/materias/').valueChanges();
  }
}
