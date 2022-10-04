import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  recuperarUsuario:FormGroup;

  constructor(
    private fb:FormBuilder,
    private afAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router,
    private firebaseError:FirebaseCodeErrorService,) {
      this.recuperarUsuario=this.fb.group({
        email:['',Validators.required]
      })
     }

  ngOnInit(): void {
  }

  recuperar(){
    const email=this.recuperarUsuario.value.email;

    this.afAuth.sendPasswordResetEmail(email)
      .then(()=>{
        this.toastr.info('Le enviamos un correo para restablecer su password (tambien verifique en la bandeja de entrada Spam)','Recuperar Password');
        this.router.navigate(['/login']);
      }).catch((error)=>{
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
  }

}
