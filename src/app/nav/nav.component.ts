import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { PersonaModelo } from '../modelo/persona.modelo';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pers:PersonaModelo;
  constructor(private router:Router) {
    this.capturarMail();  
    
   }
  
  public cerrarSesion(){
  	localStorage.clear();
  	this.router.navigate(['/']);
  	this.capturarMail();
  }
  public capturarMail(){
  	this.pers = JSON.parse(localStorage.getItem("persona"));
  }

  ngOnInit() {
  }

}
