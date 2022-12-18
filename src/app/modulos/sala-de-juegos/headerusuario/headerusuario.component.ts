import { Component, OnInit } from '@angular/core';

let body =  document.body;
let script = document.createElement('script');
script.innerHTML = '';
script.src = 'url';
script.async = true;
script.defer = true;
body.appendChild(script);

@Component({
  selector: 'app-headerusuario',
  templateUrl: './headerusuario.component.html',
  styleUrls: ['./headerusuario.component.sass']
})
export class HeaderusuarioComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

}
