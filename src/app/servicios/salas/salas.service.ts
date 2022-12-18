import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map,catchError, switchMap} from 'rxjs/operators';
import { Sala } from 'src/app/class/sala/sala';
import { participante } from 'src/app/class/sala/participante'; 

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  public sala$ = new Subject<Sala>(); //para uno solo  
  public salas$ = new Subject<Sala[]>; //para varios
  public participantes$ = new Subject<participante[]>; //para varios

  //estos si guardan
  public sala= new Sala();
  public participante= new participante();
  public salas: Sala[]=[];
  public participantes: participante[]=[];

  httpOptions={
    header:new HttpHeaders({'Content-Type':'application/json'})
  }

  public url=environment.url
  constructor(
    private http:HttpClient
  ) { }

  all$():Observable<Sala[]>{
    return this.salas$.asObservable();
  }

  getsala$():Observable<participante[]>{
    return this.participantes$.asObservable();
  }
  get$():Observable<Sala>{
    return this.sala$.asObservable();
  }
  
  all():Observable<any>{
    this.salas=[]
    return this.http.get<Sala>(this.url+"salas")
    .pipe(
      map((res:any)=>{
        res.forEach((item:any) => {
          this.sala=new Sala()
          this.sala.setValues(item)
          
          this.salas.push(this.sala)
        });
        
        this.salas$.next(this.salas)
      }),
      catchError((err)=>of(err))
     )
    
  }

  get(id:number):Observable<any>{
    this.sala= new Sala
    this.participantes=[]
    return this.http.get<Sala>(this.url+"salas/"+id)
    .pipe(
      switchMap((res:any)=>{
          this.sala=new Sala()
          this.sala.setValues(res)
          return this.http.get<participante>(this.url+"participantes")
          .pipe(
            map((res:any)=>{
              res.forEach((item2:any) => {
                if(this.sala.id==item2.sorteo){
                  this.participante= new participante()
                  this.participante.setValues(item2)
                  this.sala.participantes.push(this.participante)
                }
                this.sala$.next(this.sala)
              
              });
            }),
            catchError((err)=>of(err))
          )
         
      })
      
      )
  
  }

  create(sala:Sala):Observable<any>{
    return this.http.post<Sala>(this.url+"salas",sala)
    .pipe(
      map((res:any)=>{
          this.sala=new Sala()
          this.sala.setValues(res)
          this.sala$.next(this.sala)
      }),
      catchError((err)=>of(err))
     )
    
  }

  update(sala:Sala):Observable<any>{
    return this.http.put<Sala>(this.url+"salas/"+sala.id,sala)
    .pipe(
      map((res:any)=>{
       if(res.status=200){
          this.sala=new Sala()
          this.sala.setValues(res)
          this.sala$.next(this.sala)
        }
      }),
      catchError((err)=>of(err))
     )
    
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.url+"salas/"+id)
    .pipe(
      map((res:any)=>{
      }),
      catchError((err)=>of(err))
     )
    
  }

   
}
