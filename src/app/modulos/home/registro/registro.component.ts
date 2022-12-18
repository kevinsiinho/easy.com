import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users/users.service';
import { Users } from 'src/app/class/users/users';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  usersSubcription:Subscription=new Subscription
  public user=new Users();
  public user2=new Users();
  
  constructor(
    public userService: UsersService
    )
   { }

  ngOnInit(): void {   
     // this.usersSubcription=this.userService.get$().subscribe((item:Users)=>{
      //  this.user=item
     // })
     // this.userService.all().subscribe();
  }
  onSave(){
    this.user.saldo=100000;
    this.user.tipocuenta="Normal"
    this.user.avatar="assets/img1.jpg"
    this.userService.create(this.user).subscribe();
  }

}
