import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  check = false;
  name:any;
  data:any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.check = true;
      this.data = localStorage.getItem('user');
      this.name = JSON.parse(this.data);

  }}

}
