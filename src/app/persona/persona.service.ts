import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonaModelo} from '../modelo/persona.modelo';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http:HttpClient, private router:Router) { }

  public obtenerPersonas():Observable<PersonaModelo[]>{
  	return this.http.get<PersonaModelo[]>("http://localhost:8080/obtenerPersona");
  }

  public eliminarPersona(persona:PersonaModelo):void{
  	if (confirm('¿Esta seguro de eliminar el registro?')) {
  		this.http.post('http://localhost:8080/eliminarPersona', JSON.stringify(persona)).subscribe();
  		alert('Eliminado con exito');
  		}
  }
}
