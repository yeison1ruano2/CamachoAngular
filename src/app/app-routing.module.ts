import { CrearMateriasComponent } from './components/crear-materias/crear-materias.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { ListMatriculasComponent } from './components/list-matriculas/list-matriculas.component';
import { ListMateriasComponent } from './components/list-materias/list-materias.component';
import { CrearMatriculasComponent } from './components/crear-matriculas/crear-matriculas.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registerUser', component:RegisterUserComponent},
  {path:'checkEmail', component:CheckEmailComponent},
  {path:'passwordRecovery', component:PasswordRecoveryComponent},
  {path:'crear-materias', component:CrearMateriasComponent},
  {path:'crear-matriculas', component:CrearMatriculasComponent},
  {path:'list-materias', component:ListMateriasComponent},
  {path:'list-matriculas', component:ListMatriculasComponent},
  {path:'main', component:MainComponent},
  {path:'**', redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
