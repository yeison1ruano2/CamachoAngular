import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Database,set,ref } from '@angular/fire/database';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-crear-matriculas',
  templateUrl: './crear-matriculas.component.html',
  styleUrls: ['./crear-matriculas.component.css']
})
export class CrearMatriculasComponent implements OnInit {

  registrarMatriculas:FormGroup;
  constructor(
    private firebaseError:FirebaseCodeErrorService,
    private auth:Auth,
    private database:Database,
    private fb:FormBuilder,
    //private afAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router
    ) { 
    this.registrarMatriculas=this.fb.group({
      materia:['',Validators.required],
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
    const nombre=this.registrarMatriculas.value.nombre;
    const apellido=this.registrarMatriculas.value.apellido;
    const email=this.registrarMatriculas.value.email;
    const password=this.registrarMatriculas.value.password;
    const repeatPassword=this.registrarMatriculas.value.repeatPassword;
    const cedula=this.registrarMatriculas.value.cedula;
    const jornada=this.registrarMatriculas.value.jornada;
    const sede=this.registrarMatriculas.value.sede;
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
}
