import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderhomeComponent } from './headerhome/headerhome.component';
import { HomeComponent } from './home.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaDinamicaComponent } from './lista-dinamica/lista-dinamica.component';


@NgModule({
  declarations: [
    HeaderhomeComponent,
    HomeComponent,
    RegistroComponent,
    ListaDinamicaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
