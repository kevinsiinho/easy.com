import { Component, OnInit } from '@angular/core';
import { GanadoresService } from 'src/app/servicios/ganadores/ganadores.service';
import { Ganadores } from 'src/app/class/ganadores/ganadores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.sass']
})
export class GanadoresComponent implements OnInit {
  public ganador= new Ganadores()
  salasSubcription:Subscription=new Subscription
  public ganadores: Ganadores[]=[]
  public g:string=""

  constructor(
    public ganadoresService:GanadoresService
  ) { }

  ngOnInit(): void {
    this.salasSubcription=this.ganadoresService.all$().subscribe((item:Ganadores[])=>{
      this.ganadores=item;
      // console.log(this.ganadores.id_ganador)
      let g1=String(1148954816)
      this.g=g1.substr(-4);
      
    }
    
  )
  this.ganadoresService.all().subscribe();

}
}
