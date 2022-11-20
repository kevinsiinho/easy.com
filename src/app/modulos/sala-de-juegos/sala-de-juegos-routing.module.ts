import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApuestasComponent } from './apuestas/apuestas.component';
import { AtencionComponent } from './atencion/atencion.component';
import { CrearsalaComponent } from './crearsala/crearsala.component';
import { EditarComponent } from './editar/editar.component';
import { EditarsalaComponent } from './editarsala/editarsala.component';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { SalaDeJuegosComponent } from './sala-de-juegos.component';
import { SalaComponent } from './sala/sala.component';
import { SalasComponent } from './salas/salas.component';

const routes: Routes = [
  {path:'',component:SalaDeJuegosComponent,
  children:[
    {path:'sala',component:SalaComponent},
    {path:'lista',component:SalasComponent},
    {path:'ganadores',component:GanadoresComponent},
    {path:'mis-apuestas',component:ApuestasComponent},
    {path:'atencion-al-cliente',component:AtencionComponent},
    {path:'editar/id',component:EditarComponent},
    {path:'crear-sala',component:CrearsalaComponent},
    {path:'editar-sala',component:EditarsalaComponent}
    
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaDeJuegosRoutingModule { }
