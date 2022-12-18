import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/servicios/salas/salas.service';
import { Sala } from 'src/app/class/sala/sala';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarsala',
  templateUrl: './editarsala.component.html',
  styleUrls: ['./editarsala.component.sass']
})
export class EditarsalaComponent implements OnInit {
  editSubcription:Subscription=new Subscription
  public sala=new Sala()
  public sala2=new Sala()
  public  id!:number
  constructor( 
    public salaService: SalasService,
    private router:ActivatedRoute)//esto es para mantener la ruta viva
  { }

 
  ngOnInit(): void {
    this.id=Number(this.router.snapshot.paramMap.get('id')) //sacar el id de la ruta
    this.editSubcription=this.salaService.get$().subscribe((item:Sala)=>{
        this.sala=item;
        this.sala2.id=this.sala.id
        this.sala2.fecha_sorteo=this.sala.fecha_sorteo
        this.sala2.disponible=this.sala.disponible
        this.sala2.ganancia=Number(this.sala.cantidad!*this.sala.Ventrada!)
        this.sala2.cantidad=this.sala.cantidad
        this.sala2.fecha=this.sala.fecha


      }
      
    )
    this.salaService.get(this.id).subscribe();
  }
  onUpdate(){
    this.sala2.maximo=this.sala.maximo
    this.sala2.sala=this.sala.sala
    this.sala2.Ventrada=this.sala.Ventrada
    this.salaService.update(this.sala2).subscribe();
  }


}
