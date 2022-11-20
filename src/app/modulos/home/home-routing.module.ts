import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderhomeComponent} from './headerhome/headerhome.component'
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',component:HomeComponent
  //  children: [
//    {}
//  ] 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
