import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonaModelo} from '../modelo/persona.modelo';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
	private person:PersonaModelo;
	constructor(private loginService:LoginService, private router:Router, private app:AppComponent){
		this.person = new PersonaModelo();
		
	}
	ngOnInit() {
    }

	public login(){
		this.loginService.log(this.person).subscribe(datos =>{
			if (datos) {
				this.router.navigate(['/persona']);
				this.app.capturarMail();
			}else{
				alert('Verifique su usario y/o contraseña');
			}
		});
	}
}