<<<<<<< HEAD
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {PersonaModelo} from '../modelo/persona.modelo';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { NavComponent } from '../nav/nav.component';
=======
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonaModelo} from '../modelo/persona.modelo';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
>>>>>>> origin/master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

	private person:PersonaModelo;
	logged:boolean = false;
	constructor(private loginService:LoginService, private router:Router){
		this.person = new PersonaModelo();
=======
	private person:PersonaModelo;
	constructor(private loginService:LoginService, private router:Router, private app:AppComponent){
		this.person = new PersonaModelo();
		
>>>>>>> origin/master
	}
	ngOnInit() {
    }

	public login(){
		this.loginService.log(this.person).subscribe(datos =>{
			if (datos) {
				this.router.navigate(['/persona']);
<<<<<<< HEAD
				this.logged = true;
			}else{
				alert('Verifique su usario y/o contraseña');
				this.logged = false;
=======
				this.app.capturarMail();
			}else{
				alert('Verifique su usario y/o contraseña');
>>>>>>> origin/master
			}
		});
	}
}