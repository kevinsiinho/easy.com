import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users/users.service';
import { Users } from 'src/app/class/users/users';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-sala-de-juegos',
  templateUrl: './sala-de-juegos.component.html',
  styleUrls: ['./sala-de-juegos.component.sass']
})
export class SalaDeJuegosComponent implements OnInit {
  usersSubcription:Subscription=new Subscription
  public user=new Users();
  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    
  }

}
