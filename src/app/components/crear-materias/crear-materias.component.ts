import { UserService } from './../../services/user.services';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { Database,set,ref,getDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { createFind } from 'rxjs/internal/operators/find';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { MateriaService } from 'src/app/services/materia.services';



@Component({
  selector: 'app-crear-materias',
  templateUrl: './crear-materias.component.html',
  styleUrls: ['./crear-materias.component.css']
})
export class CrearMateriasComponent implements OnInit {

  registrarMateria:FormGroup;
  submitted=false;
  constructor(
    public materiaService:MateriaService,
    //private firebase:FirebaseDatabase,
    private firebaseError:FirebaseCodeErrorService,
    private auth:Auth,
    private database:Database,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private db:AngularFireDatabase
    ) { 
    this.registrarMateria=this.fb.group({
      codigo:['',Validators.required],
      descripcion:['',Validators.required],
      grupo:['',Validators.required],
      semestre:['',Validators.required],
      ih:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  
  guardarMateria(value:any){
    const materia:any={
      codigo:this.registrarMateria.value.codigo,
      descripcion:this.registrarMateria.value.descripcion,
      grupo:this.registrarMateria.value.grupo,
      semestre:this.registrarMateria.value.semestre,
      ih:this.registrarMateria.value.ih,
      //fechaCreacion:Date.now(),
    }
    this.materiaService.agregarMateria(materia);

    console.log(materia);
    console.log(this.registrarMateria.value);
    this.toastr.success('Materia Registrada con Exito','Confirmaci??n');
    this.registrarMateria.reset();
    //this.router.navigate(['/list-materias']);
  }





    /* createUserWithEmailAndPassword(this.auth,email,password)
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
      console.log(user);
      this.toastr.success('Usuario registrado con exito','Confirmacion');
      this.router.navigate(['/main']);
    })
    .catch((error)=>{
      const respuesta=this.firebaseError.codeError(error.code);
      switch(respuesta){
        case 'EL CORREO ELECTRONICO YA EXISTE':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'TU CONTRASE??A DEBE TENER 6 CARACTERES O MAS':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'Correo invalido (Debe contener la terminacion @ejemplo.com)':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'Ocurrio un error, vuelve a llenar el formulario': 
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'CONTRASE??A INCORRECTA':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;
        case 'EL CORREO ELECTRONICO NO EXISTE':
          this.toastr.warning(this.firebaseError.codeError(error.code),'Advertencia');
          return;       
        default:
          return;  
      }
      //this.toastr.error(this.firebaseError(error.code),'Error');
    }); */
  
}
