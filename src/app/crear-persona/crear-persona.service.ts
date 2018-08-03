import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RestResponse} from '../modelo/restResponse.modelo';
import {PersonaModelo} from '../modelo/persona.modelo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrearPersonaService {

  constructor(private http:HttpClient) { }

  public validarCampos(person:PersonaModelo): boolean{
  	let validar = true;
  	if (!person.nombres) {
  		validar = false;
  	}
  	if (!person.apellidos) {
  		validar = false;
  	}
  	if (!person.telefono) {
  		validar = false;
  	}
  	if (!person.direccion) {
  		validar = false;
  	}
  	if (!person.correo) {
  		validar = false;
  	}
  	if (!person.clave) {
  		validar = false;
  	}

  	return validar;
  }
  public guardarEditarPersona(person:PersonaModelo):Observable<RestResponse>{
  	return this.http.post<RestResponse>("http://localhost:8080/guardarEditarPersona", JSON.stringify(person));
  }
}
