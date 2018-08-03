import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonaModelo} from '../modelo/persona.modelo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http:HttpClient) { }

  public obtenerPersonas():Observable<PersonaModelo[]>{
  	return this.http.get<PersonaModelo[]>("http://localhost:8080/obtenerPersona");
  }
}
