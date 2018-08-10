import { Component, OnInit } from '@angular/core';
import {PersonaService} from './persona.service';
import {PersonaModelo} from '../modelo/persona.modelo';
import {Router} from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {
	private persona: Array<PersonaModelo>;
  constructor(private personaService:PersonaService, private router:Router) { }

  ngOnInit() {
  	this.cargarPersonas();
  }

  private cargarPersonas(): void{
  	this.personaService.obtenerPersonas().subscribe(resultado =>{
      this.persona = resultado;
    });
    sessionStorage.clear();
  }

  public editarPersona(persona:PersonaModelo):void{
    sessionStorage.setItem('persona', JSON.stringify(persona));
    this.router.navigate(['/crear-persona']);
  }

  public eliminarPersona(persona:PersonaModelo):void{
    this.personaService.eliminarPersona(persona);
    this.cargarPersonas();
  }
}
