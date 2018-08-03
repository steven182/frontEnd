import { Component, OnInit } from '@angular/core';
import {PersonaService} from './persona.service';
import {PersonaModelo} from '../modelo/persona.modelo';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {
	private persona: Array<PersonaModelo>;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
  	this.cargarPersonas();
  }

  private cargarPersonas(): void{
  	this.personaService.obtenerPersonas().subscribe(resultado =>{
      this.persona = resultado;
    });
  }
}
