import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {identity} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user?:User;
  check = false;
  name:any;
  data:any;
  id?:number;
  constructor(private userService:UserService,
              private route:Router,
              private router:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if(window.localStorage.getItem('user')) {
      this.check = true;
      this.data = localStorage.getItem('user');
      this.user = JSON.parse(this.data);
      console.log(this.user)
    }
  }



}
