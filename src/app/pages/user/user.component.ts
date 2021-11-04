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
  data:any;
  constructor(private userService:UserService,
              private route:Router,
              private router:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUserLogin();
  }

  getUserLogin(){
    this.userService.getInfoUserLogin().subscribe(res => {
      console.log(res)
      this.data = res
    })
  }



}
