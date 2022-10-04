import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';


//componentes
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { ListMatriculasComponent } from './components/list-matriculas/list-matriculas.component';
import { MainComponent } from './components/main/main.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CrearMatriculasComponent } from './components/crear-matriculas/crear-matriculas.component';
import { CrearMateriasComponent } from './components/crear-materias/crear-materias.component';
import { ListMateriasComponent } from './components/list-materias/list-materias.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterUserComponent,
    CheckEmailComponent,
    PasswordRecoveryComponent,
    SpinnerComponent,
    ListMatriculasComponent,
    UsuarioComponent,
    CrearMatriculasComponent,
    CrearMateriasComponent,
    ListMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideDatabase(() => getDatabase()),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
