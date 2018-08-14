import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import { PersonaComponent } from './persona/persona.component';
import { RolComponent } from './rol/rol.component';
import {PersonaService} from './persona/persona.service';
import {RolService} from './rol/rol.service';
import {LoginComponent} from './login/login.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import {LoginService} from './login/login.service';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { GuardService } from './login/guard.service';
=======
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
    LoginComponent,
<<<<<<< HEAD
    CrearPersonaComponent,
    NavComponent
=======
    CrearPersonaComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
<<<<<<< HEAD
  providers: [PersonaService, RolService, LoginService, GuardService],
=======
  providers: [PersonaService, RolService, LoginService],
>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
