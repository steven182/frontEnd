import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PersonaComponent} from './persona/persona.component';
import {RolComponent} from './rol/rol.component';
import{CrearPersonaComponent} from './crear-persona/crear-persona.component';
import {GuardService} from './login/guard.service';
import { NavComponent } from './nav/nav.component';

const routes:Routes = [
	{path: '', component:LoginComponent},
	{path:'appComponent', component: AppComponent},
	{path: 'persona', component: PersonaComponent, canActivate:[GuardService]},
	{path: 'rol', component:RolComponent},
	{path: 'login', component:LoginComponent},
	{path: 'crear-persona', component:CrearPersonaComponent, canActivate:[GuardService]}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule],
})
export class AppRoutingModule{

}