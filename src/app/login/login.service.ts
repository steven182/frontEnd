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
  public sesion:boolean = false;
  constructor(private http:HttpClient) {
   }

  public log(per:PersonaModelo):Observable<PersonaModelo[]>{
  		localStorage.setItem('persona', JSON.stringify(per));
  		return this.http.post<PersonaModelo[]>("http://localhost:8080/login", JSON.stringify(per));
    }   
  public validaLog(person:PersonaModelo){
    this.log(person).subscribe(res =>{
      if(res){
        this.sesion = true;
      }else{
        this.sesion = false;
      }
    })
  }  
  }


