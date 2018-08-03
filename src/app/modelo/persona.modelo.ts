import {RolModelo} from '../modelo/rol.modelo';

export class PersonaModelo{
	public idPersona:number;
	public nombres:string;
	public apellidos:string;
	public telefono:string;
	public direccion:string;
	public correo:string;
	public clave:string;
	public rolIdRol:RolModelo;

}