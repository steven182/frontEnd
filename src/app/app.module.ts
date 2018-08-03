import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import { PersonaComponent } from './persona/persona.component';
import { RolComponent } from './rol/rol.component';
import {PersonaService} from './persona/persona.service';
import {RolService} from './rol/rol.service';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [PersonaService, RolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
