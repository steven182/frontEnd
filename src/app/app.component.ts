import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {PersonaModelo} from './modelo/persona.modelo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
  }

}
