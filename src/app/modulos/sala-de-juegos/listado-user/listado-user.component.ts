import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users/users.service';
import { Users } from 'src/app/class/users/users';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listado-user',
  templateUrl: './listado-user.component.html',
  styleUrls: ['./listado-user.component.sass']
})

export class ListadoUserComponent implements OnInit {

  usersSubcription:Subscription=new Subscription
  public user=new Users();
  public users: Users[]=[]
  constructor(
   public userService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersSubcription=this.userService.all$().subscribe((item:Users[])=>{
        this.users=item;
      }
      
    )
    this.userService.all().subscribe();
  }

}
