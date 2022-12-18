import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, pipe, Subject} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams, HttpClientModule} from '@angular/common/http';
import { Users } from 'src/app/class/users/users';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LoginI } from 'src/app/interfaces/login';
import { ResponseI } from 'src/app/interfaces/response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public helper = new JwtHelperService();
  public user = new Users()
  public url=environment.url;
  constructor(
    private http:HttpClient,
    private cookies: CookieService,
    private router:ActivatedRoute,
    private route: Router
  ) { }

login(user:Users): Observable<any> {
    return this.http.post<Users>(this.url+"login", user)
    .pipe(
      map((res:any)=>{
        var datos=[user.id,user.nombre,user.avatar,user.celular,user.email,user.saldo,
        user.tipocuenta,user.usuario];
        localStorage.setItem("item",JSON.stringify(datos))
        this.route.navigate(['/salas/lista']);
      }),
      catchError((err)=>of(err))
     )
    
  }

cerrar():Observable<any>{
  
 return this.http.delete(this.url+"login/"+1148954816)
 .pipe(
    map((res:any)=>{
      localStorage.removeItem("item")
      this.route.navigate(['/salas/lista']);
    }),
    catchError((err)=>of(err))
    )
  
}
   
  
}


