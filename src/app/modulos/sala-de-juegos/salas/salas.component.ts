import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/servicios/salas/salas.service';
import { Sala } from 'src/app/class/sala/sala';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

declare var irderecha:any
declare var irizquierda:any
declare var ventana:any

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.sass']
})
export class SalasComponent implements OnInit {

  derecha(){
    irderecha()
  }

  izquierda(){
    irizquierda()
  }
  salasSubcription:Subscription=new Subscription
  public sala=new Sala();
  public salas: Sala[]=[]
  public  id!:number
  constructor(
   public salaService: SalasService,
   private router:ActivatedRoute,
   private route: Router
  ) { }

  ngOnInit(): void {
    this.salasSubcription=this.salaService.all$().subscribe((item:Sala[])=>{
        this.salas=item;
      }
      
    )
    this.salaService.all().subscribe();
  }
  onDelete(id2:number){
    this.salaService.delete(id2).subscribe((res:any)=>{
      this.route.navigate(['/salas/lista'])
    });
    
    ventana()
  }


}
