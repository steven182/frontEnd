import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonaModelo} from '../modelo/persona.modelo';
import {RestResponse} from '../modelo/restResponse.modelo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	public obj:any;
  constructor(private http:HttpClient) {
   }

  public log(per:PersonaModelo):Observable<PersonaModelo[]>{
  		sessionStorage.setItem('persona', JSON.stringify(per));
  		return this.http.post<PersonaModelo[]>("http://localhost:8080/login", JSON.stringify(per));
  	}
  }


