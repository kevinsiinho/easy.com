import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
 [
  {path:'',loadChildren:()=>import('./modulos/home/home.module').then(m=>m.HomeModule)},
  {path:'salas',loadChildren:()=>import('./modulos/sala-de-juegos/sala-de-juegos.module').then(m=>m.SalaDeJuegosModule)}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
