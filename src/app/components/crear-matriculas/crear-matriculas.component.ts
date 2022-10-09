import { MateriasinputService } from './../../services/materiasinput.services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Database } from '@angular/fire/database';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MateriaService } from 'src/app/services/materia.services';


@Component({
  selector: 'app-crear-matriculas',
  templateUrl: './crear-matriculas.component.html',
  styleUrls: ['./crear-matriculas.component.css']
})
export class CrearMatriculasComponent implements OnInit {

  registrarMatriculas:FormGroup;
  //const descripcion="descripcion";
  constructor(
    public materiasServices:MateriaService,
    public db:AngularFireDatabase,
    private materiasInputService:MateriasinputService,
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
    })
  }

  tableDescripcion:any;
  tableDbDescripcion:any;

  ngOnInit(): void {
    this.getAllMaterias();
  }

  guardarMatricula(value:any){
    const matricula:any={
      materia:this.registrarMatriculas.value.materia,
      //materiaid:this.
      //fechaCreacion:Date.now(),
    }
    console.log(matricula);
    const user=this.auth.currentUser;
    const userid=user?.uid;
    const email=this.auth.currentUser;
    const emailuser=email?.email;
    console.log(userid);
    console.log(emailuser);

    /* this.materiasInputService.readMaterias(materia);

    console.log(materia);
    console.log(this.registrarMateria.value);
    this.toastr.success('Materia Registrada con Exito','Confirmación');
    this.registrarMateria.reset(); */
    //this.router.navigate(['/list-materias']);
  }

  getAllMaterias(){
    this.materiasInputService.readMaterias().subscribe((res)=>{
      this.tableDescripcion=res;
    });
  }

}



 /*  consultarMaterias(value:any){
    this.materiainput.getData().subscribe(resp=>{
      const r=Object.values(resp);
      const user=this.auth.currentUser;
      const userid=user?.uid;
      const f=this.db.list(`/usuarios/${userid}/nombre/`);
      const dbRef=this.db.list(`/materias/${userid}/`);
      //const nombre=this.db.list(dbRef,'');
      console.log(r);
      console.log(f);
      console.log('resp',resp);
      console.log(userid);
      console.log(dbRef);
      //console.log(nombre);
      
    })
  } */
  /* consultarMaterias(value:any){
    const dbRef=ref(getDatabase());
    get(child(dbRef,`materias/${descripcion}`)).then((snapshot)=>{
      if(snapshot.exists()){
        console.log(snapshot.val());
      }else{
        console.log('Data invalible');
      }
    }).catch((error)=>{
      console.log(error);
    })
  } */

  /* registrarUser(value:any){
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
  } */

