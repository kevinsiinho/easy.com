import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users/users.service';
import { Users } from 'src/app/class/users/users';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-headerhome',
  templateUrl: './headerhome.component.html',
  styleUrls: ['./headerhome.component.sass']
})
export class HeaderhomeComponent implements OnInit {
  usersSubcription:Subscription=new Subscription
  public user=new Users();
  public  id!:number
  constructor(
     public userService: UsersService,
     public authService:AuthService,
     private router:ActivatedRoute//esto es para mantener la ruta viva
     ){ }
    
  ngOnInit(): void {
    this.usersSubcription=this.userService.get$().subscribe((item:Users)=>{
      this.user=item
      temp:[{"usuario":item.usuario,"password":item.password}]
      console.log(item);
      this.authService.login({"usuario":item.usuario,"password":item.password}).subscribe(data=>{
        console.log(data);
        
      });
    })
    this.userService.get(1148954816).subscribe();
  }
  
  onIngresar(){
   
    
 }

}
