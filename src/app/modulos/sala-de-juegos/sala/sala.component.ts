import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/servicios/salas/salas.service';
import { Ganadores } from 'src/app/class/ganadores/ganadores';
import { Sala } from 'src/app/class/sala/sala';
import { Subscription,timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GanadoresService } from 'src/app/servicios/ganadores/ganadores.service';
declare var irderecha:any
declare var irizquierda:any
declare var simulacion:any
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.sass']
})
export class SalaComponent implements OnInit {
  derecha(){
    irderecha()
  }

  izquierda(){
    irizquierda()
  }

  salasSubcription:Subscription=new Subscription
  public sala=new Sala(); 
  public  id!:number
  public  valor:number=0
  public fin:any
  public ahora:any
  public hora:any
  public dia:any
  public minutos:any
  public segundos:any
  public ganador:any;
  source =timer(0,1000)
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;

  constructor(
   public salaService: SalasService,
   private router:ActivatedRoute,
   private route: Router,
   public ganadorService:GanadoresService
  ) { }

  ngOnInit(): void {
    
    this.id=Number(this.router.snapshot.paramMap.get('id'))
    this.salasSubcription=this.salaService.get$().subscribe((item:Sala)=>{
         
        this.sala=item;
        this.ganador=this.sala.participantes[Math.floor(Math.random() * this.sala.participantes.length)];
        this.ganador.fecha=this.sala.fecha;
        this.hora=this.source.subscribe(t=>{
        this.ahora=new Date()
        let str=String( this.sala.fecha_sorteo)
        this.fin=new Date(str)
        
        if(this.segundos==0 && this.minutos==0 && this.dia==0){
          this.ganadorService.create(this.ganador).subscribe();
          simulacion(this.ganador.usuario,this.ganador.sorteo,this.ganador.numero)
        
          }else{
           this.showDate();
          }
       })

      }
      
    )

    
    this.salaService.get(this.id).subscribe();
  }




  showDate(){
    let distancia=this.fin-this.ahora
    this.dia=Math.floor(distancia/this._day)
    this.hora=Math.floor((distancia % this._day)/this._hour)
    this.minutos=Math.floor((distancia % this._hour)/this._minute)
    this.segundos=Math.floor((distancia % this._minute)/this._second)
  }

}
