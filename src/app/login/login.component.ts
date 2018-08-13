import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {PersonaModelo} from '../modelo/persona.modelo';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

	private person:PersonaModelo;
	logged:boolean = false;
	constructor(private loginService:LoginService, private router:Router){
		this.person = new PersonaModelo();
	}
	ngOnInit() {
    }

	public login(){
		this.loginService.log(this.person).subscribe(datos =>{
			if (datos) {
				this.router.navigate(['/persona']);
				this.logged = true;
			}else{
				alert('Verifique su usario y/o contraseña');
				this.logged = false;
			}
		});
	}
}