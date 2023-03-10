import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalaDeJuegosRoutingModule } from './sala-de-juegos-routing.module';
import { SalaDeJuegosComponent } from './sala-de-juegos.component';
import { HeaderusuarioComponent } from './headerusuario/headerusuario.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { ApuestasComponent } from './apuestas/apuestas.component';
import { AtencionComponent } from './atencion/atencion.component';
import { SalaComponent } from './sala/sala.component';
import { EditarComponent } from './editar/editar.component';
import { SalasComponent } from './salas/salas.component';
import { CrearsalaComponent } from './crearsala/crearsala.component';
import { EditarsalaComponent } from './editarsala/editarsala.component';
import { ListadoUserComponent } from './listado-user/listado-user.component';


@NgModule({
  declarations: [
    SalaDeJuegosComponent,
    HeaderusuarioComponent,
    HeaderadminComponent,
    GanadoresComponent,
    ApuestasComponent,
    AtencionComponent,
    SalaComponent,
    EditarComponent,
    SalasComponent,
    CrearsalaComponent,
    EditarsalaComponent,
    ListadoUserComponent
  ],
  imports: [
    CommonModule,
    SalaDeJuegosRoutingModule,
    FormsModule
  ]
})
export class SalaDeJuegosModule { }
