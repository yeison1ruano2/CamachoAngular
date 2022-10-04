import { MainComponent } from './../main/main.component';
import { ListMatriculasComponent } from './../list-matriculas/list-matriculas.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario:FormGroup;
  constructor(
    private fb:FormBuilder,
    private afAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router,
    private firebaseError:FirebaseCodeErrorService,
    ) { 
      this.loginUsuario=this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
      })
    }

  ngOnInit(): void {
  }

  login(){
    const email=this.loginUsuario.value.email;
    const password=this.loginUsuario.value.password;
    this.afAuth.signInWithEmailAndPassword(email,password)
      .then((user)=>{
        console.log(user);
        this.router.navigate(['/list-matriculas']);
      }).catch((error)=>{
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
  }
}
