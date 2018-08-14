import { Injectable } from '@angular/core';
import {LoginService} from './login.service';
import { Router, CanActivate } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login.component';
=======
>>>>>>> origin/master


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
	log:boolean = false;
<<<<<<< HEAD
  constructor(private route:Router) {
  	
   }

  canActivate(){
  	if (localStorage.getItem("persona") != null) {
  		return this.log = true;	
		}else{
			alert("No tiene acceso a esta pagina");
			this.route.navigate(['/']);
			return this.log = false;
			
		}
=======
  constructor(private lg:LoginService, private route:Router) {
  	if (sessionStorage.getItem('persona').length < 0) {
  		this.log = true;	
  	}
  	this.route.navigate(['/']);
  		this.log = false;

   }

  canActivate(){
  	return this.log;
>>>>>>> origin/master
  }
}
