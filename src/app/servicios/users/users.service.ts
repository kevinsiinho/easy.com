import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map,catchError, tap} from 'rxjs/operators';
import { Users } from 'src/app/class/users/users'; 

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  //solo comunica es decir actualiza los cambios si los hay
  public user$ = new Subject<Users>(); //para uno solo  
  public users$ = new Subject<Users[]>; //para varios
  autenticacion= new BehaviorSubject(false)
  private token?:string;
  //estos si guardan
  public user= new Users();
  public users: Users[]=[];


  //como tratar la info o es decir para que lea lo que llega correctamente
  httpOptions={
    header:new HttpHeaders({'Content-Type':'application/json'})
  }

  public url=environment.url
  constructor(
    private http:HttpClient
  ) { }

  all$():Observable<Users[]>{
    return this.users$.asObservable();
  }

  get$():Observable<Users>{
    return this.user$.asObservable();
  }
  //funcion que permite llamar al servidor y pasarle unos parametros

  all():Observable<any>{
    this.users=[]
    return this.http.get<Users>(this.url+"user")
    .pipe(
      map((res:any)=>{
        res.forEach((item:any) => {
          this.user=new Users()
          this.user.setValues(item)
          this.users.push(this.user)
        });
        this.users$.next(this.users)
      }),
      catchError((err)=>of(err))
     )
    
  }

  get(id:number):Observable<any>{
    this.user=new Users
    console.log(this.url+"user/"+id)
    return this.http.get<Users>(this.url+"user/"+id)
    .pipe(
      map((res:any)=>{
          this.user=new Users()
          this.user.setValues(res)
          this.user$.next(this.user)
        
      }),
      catchError((err)=>of(err))
     )
    
  }

  create(user:Users){
    return this.http.post<Users>(this.url+"user",user)
   .pipe(
      map((res:any)=>{
        if(res.status==200){
          this.user=new Users()
          this.user.setValues(res.data)
          this.user$.next(this.user)
        }
      }),
      catchError((err)=>of(err))
     )
   
  }
}
