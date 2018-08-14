import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PersonaComponent} from './persona/persona.component';
import {RolComponent} from './rol/rol.component';
import{CrearPersonaComponent} from './crear-persona/crear-persona.component';
import {GuardService} from './login/guard.service';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
=======
>>>>>>> origin/master

const routes:Routes = [
	{path: '', component:LoginComponent},
	{path:'appComponent', component: AppComponent},
<<<<<<< HEAD
	{path: 'persona', component: PersonaComponent, canActivate:[GuardService]},
	{path: 'rol', component:RolComponent},
	{path: 'login', component:LoginComponent},
	{path: 'crear-persona', component:CrearPersonaComponent, canActivate:[GuardService]}
=======
	{path: 'persona', component: PersonaComponent},
	{path: 'rol', component:RolComponent},
	{path: 'login', component:LoginComponent, canActivate:[GuardService]},
	{path: 'crear-persona', component:CrearPersonaComponent}
>>>>>>> origin/master
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule],
})
export class AppRoutingModule{

}