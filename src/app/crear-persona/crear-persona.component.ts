import { Component, OnInit } from '@angular/core';
import { PersonaModelo } from '../modelo/persona.modelo';
import { CrearPersonaService } from './crear-persona.service';
import { OK } from './../modelo/httpStatus';
import { Router } from '@angular/router';

import { GuardService } from '../login/guard.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
	selector: 'app-crear-persona',
	templateUrl: './crear-persona.component.html',
	styleUrls: ['./crear-persona.component.css'],
	providers: [CrearPersonaService, GuardService]
})
export class CrearPersonaComponent implements OnInit {

	private persona1: PersonaModelo;
	private validar: boolean = true;
	private mensaje: string = "";
	frmRegistro: FormGroup;
	constructor(private perServive: CrearPersonaService, private router: Router, private fb: FormBuilder) {
		if (sessionStorage.getItem("persona")) {
			this.persona1 = JSON.parse(sessionStorage.getItem("persona"));
			console.log(this.persona1);
		} else {
			this.persona1 = new PersonaModelo();
		}
	}

	ngOnInit() {
		this.frmRegistro = this.fb.group({
			nombre: [this.persona1.nombres, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
			apellido: [this.persona1.apellidos, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
			telefono: [this.persona1.telefono, [Validators.required, Validators.pattern('^\\d+$'), Validators.maxLength(10), Validators.minLength(7)]],
			direccion: [this.persona1.direccion, [Validators.required, Validators.pattern('^.*(?=.*[0-9])(?=.*[a-zA-ZñÑ\\s]).*$')]],
			correo: [this.persona1.correo, [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
			clave: [this.persona1.clave, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
		})	
	}

	public guardarEditarPersona() {
		const form = this.frmRegistro.value;
		this.persona1.nombres = form.nombre;
		this.persona1.apellidos = form.apellido;
		this.persona1.telefono = form.telefono;
		this.persona1.direccion = form.direccion;
		this.persona1.correo = form.correo;
		this.persona1.clave = form.clave;
		this.perServive.guardarEditarPersona(this.persona1).subscribe(res => {
			if (res.codigoRespuesta == OK) {
				this.router.navigate(['/persona']);
			} else {
				this.mensaje = res.mensaje;
				this.validar = false;
			}
		})
		sessionStorage.clear();
	}
}
