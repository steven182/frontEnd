import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import { PersonaComponent } from './persona/persona.component';
import { RolComponent } from './rol/rol.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
