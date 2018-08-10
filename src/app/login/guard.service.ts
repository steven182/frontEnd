import { Injectable } from '@angular/core';
import {LoginService} from './login.service';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
	log:boolean = false;
  constructor(private lg:LoginService, private route:Router) {
  	if (sessionStorage.getItem('persona').length < 0) {
  		this.log = true;	
  	}
  	this.route.navigate(['/']);
  		this.log = false;

   }

  canActivate(){
  	return this.log;
  }
}
