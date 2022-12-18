import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/servicios/salas/salas.service';
import { participante } from 'src/app/class/sala/participante';
import { Sala } from 'src/app/class/sala/sala';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-crearsala',
  templateUrl: './crearsala.component.html',
  styleUrls: ['./crearsala.component.sass']
})
export class CrearsalaComponent implements OnInit {

  usersSubcription:Subscription=new Subscription
  public sala=new Sala();
  //public user2=new Sala();
  constructor( public SalasService: SalasService) { }

  ngOnInit(): void {
      this.usersSubcription=this.SalasService.get$().subscribe((item:Sala)=>{
       this.sala=item
      })
     this.SalasService.get(0).subscribe();
  }

  onSave(){
    this.sala.disponible=this.sala.maximo
    this.sala.cantidad=0
    this.sala.ganancia=0
    this.sala.fecha=new Date()
    this.SalasService.create(this.sala).subscribe();
    console.log(this.sala)
  }

}
