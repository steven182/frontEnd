import { Component, OnInit } from '@angular/core';
import {PersonaModelo} from '../modelo/persona.modelo';
import {CrearPersonaService} from './crear-persona.service';
import {OK} from './../modelo/httpStatus';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
  providers: [CrearPersonaService]
})
export class CrearPersonaComponent implements OnInit {

	private persona1:PersonaModelo;
	private validar:boolean = true;
	private mensaje:string = "";
  constructor(private perServive:CrearPersonaService, private router:Router) { 
  	this.persona1 = new PersonaModelo();
  }

  ngOnInit() {
  }

  public guardarEditarPersona(){
  	this.perServive.validarCampos(this.persona1);
  	if (this.validar) {
  		this.perServive.guardarEditarPersona(this.persona1).subscribe(res =>{
  			if (res.codigoRespuesta == OK) {
  				this.router.navigate(['/persona']);
  			}else{
  				this.mensaje = res.mensaje;
  				this.validar = false;
  			}
  		})
  	}else{
  		this.mensaje = "Los campos son obligatorios";
  	}
  }
}
