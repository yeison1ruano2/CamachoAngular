import { firebaseCodeErrorEnum } from './../utils/fire-code-error';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }


  //Manejo de errores en el login
  codeError(code:string){
    switch(code){
      case firebaseCodeErrorEnum.emailAlready:
        return 'EL CORREO ELECTRONICO YA EXISTE';
      case firebaseCodeErrorEnum.weakPassword:
        return 'TU CONTRASEÑA DEBE TENER 6 CARACTERES O MAS';
      case firebaseCodeErrorEnum.invalidEmail:
        return 'Correo invalido (Debe contener la terminacion @ejemplo.com)'
      case firebaseCodeErrorEnum.internalError:
        return 'Ocurrio un error, vuelve a llenar el formulario'
      case firebaseCodeErrorEnum.wrongPassword:
        return 'CONTRASEÑA INCORRECTA';
      case firebaseCodeErrorEnum.userNotFound:
        return 'EL CORREO ELECTRONICO NO EXISTE';  
      default:
        return 'Error desconocido';
    }
  }
}
