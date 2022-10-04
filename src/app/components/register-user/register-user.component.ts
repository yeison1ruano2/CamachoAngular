//import { registrarUsuario } from 'src/app/services/registrar-usuario.service';
import { initializeApp } from '@angular/fire/app';
//import {AuthService} from '@firebase/auth/';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import {Database,set,ref} from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registrarUsuario:FormGroup;
  constructor(
    private firebaseError:FirebaseCodeErrorService,
    private auth:Auth,
    private database:Database,
    private fb:FormBuilder,
    private afAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router
    ) { 
    this.registrarUsuario=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repeatPassword:['',Validators.required],
      cedula:['',Validators.required],
      jornada:['',Validators.required],
      sede:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrarUser(value:any){
    const nombre=this.registrarUsuario.value.nombre;
    const apellido=this.registrarUsuario.value.apellido;
    const email=this.registrarUsuario.value.email;
    const password=this.registrarUsuario.value.password;
    const repeatPassword=this.registrarUsuario.value.repeatPassword;
    const cedula=this.registrarUsuario.value.cedula;
    const jornada=this.registrarUsuario.value.jornada;
    const sede=this.registrarUsuario.value.sede;
    const fecha=Date.now();
    console.log(fecha);
    
    if(password!==repeatPassword){
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    }
    createUserWithEmailAndPassword(this.auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      set(ref(this.database,'usuarios/' + user.uid),{
        uid:user.uid,
        nombre:nombre,
        apellido:apellido,
        email:email,
        cedula:cedula,
        jornada:jornada,
        sede:sede,
        fecha:fecha,
        admin:false
      });
      
      this.toastr.success('Usuario registrado con exito','Confirmacion');
      this.router.navigate(['/main']);
    })
    .catch((error)=>{
      const respuesta=this.firebaseError.codeError(error.code);
      switch(respuesta){
        case 'EL CORREO ELECTRONICO YA EXISTE':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'TU CONTRASEÑA DEBE TENER 6 CARACTERES O MAS':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'Correo invalido (Debe contener la terminacion @ejemplo.com)':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'Ocurrio un error, vuelve a llenar el formulario': 
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'CONTRASEÑA INCORRECTA':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'EL CORREO ELECTRONICO NO EXISTE':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;       
        default:
          return;  
      }
      //this.toastr.error(this.firebaseError(error.code),'Error');
    });
  }


  /* actualizar(value:any){
    const email=this.registrarUsuario.value.email;
    const password=this.registrarUsuario.value.password;
    const repeatPassword=this.registrarUsuario.value.repeatPassword;
    
    if(password!==repeatPassword){
      this.toastr.warning('Las contraseñas no conciden', 'Advertencia');
      return;
    }
    
    this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(()=>{
        this.router.navigate(['/login']);
        this.toastr.success('Usuario registrado con exito','Confirmacion');
        //console.log(firebase.auth().currentUser.getIdToken);
        //console.log(user);
        
      })
      .catch((error)=>{
        console.log(error);
        this.toastr.error(this.firebaseError(error.code),'Error');
      })
  } */

  
}
