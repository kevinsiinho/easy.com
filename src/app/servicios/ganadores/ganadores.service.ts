import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map,catchError} from 'rxjs/operators';
import { Ganadores } from 'src/app/class/ganadores/ganadores';

@Injectable({
  providedIn: 'root'
})
export class GanadoresService {
  public ganadores$ =new Subject<Ganadores[]>;
  public ganador$ =new Subject<Ganadores>();
  public ganador =new Ganadores();
  public ganadores:Ganadores[]=[];

  httpOptions={
    header:new HttpHeaders({'Content-Type':'application/json'})
  }

  public url=environment.url
  constructor(
    private http:HttpClient
  ) { }

  all$():Observable<Ganadores[]>{
    return this.ganadores$.asObservable();
  }

  all():Observable<any>{
    this.ganadores=[]
    return this.http.get<Ganadores>(this.url+"ganadores")
    .pipe(
      map((res:any)=>{
        res.forEach((item:any) => {
          this.ganador=new Ganadores()
          console.log(this.ganador)
          this.ganador.setValues(item)
          this.ganadores.push(this.ganador)
        });
        this.ganadores$.next(this.ganadores)
      }),
      catchError((err)=>of(err))
     )
    
  }

  create(ganador:Ganadores):Observable<any>{
    console.log(ganador);
    return this.http.post<Ganadores>(this.url+"ganadores",ganador)
    .pipe(
      map((res:any)=>{
        console.log("todo correcto");
          this.ganador=new Ganadores()
          this.ganador.setValues(res)
          this.ganador$.next(this.ganador)
        
      }),
      catchError((err)=>of(err))
     )
    
  }

}
