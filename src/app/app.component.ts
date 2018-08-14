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
<<<<<<< HEAD
  constructor(){
=======
  private pers:PersonaModelo;

  constructor(private router:Router){
  	this.capturarMail();
  }
  public cerrarSesion(){
  	sessionStorage.clear();
  	this.router.navigate(['/']);
  	this.capturarMail();
  }
  public capturarMail(){
  	this.pers = JSON.parse(sessionStorage.getItem("persona"));
>>>>>>> origin/master
  }

}
