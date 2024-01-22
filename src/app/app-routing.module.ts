import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {ProyectosComponent} from './componentes/proyectos/proyectos.component';
import {HabilidadesComponent} from './componentes/habilidades/habilidades.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
