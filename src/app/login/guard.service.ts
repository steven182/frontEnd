import { Injectable } from '@angular/core';
import {LoginService} from './login.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
	log:boolean = false;
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
  }
}
