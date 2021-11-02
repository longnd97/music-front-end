import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user?:User;
  constructor(private userService:UserService,
              private route:Router,
              private router:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let id = parseInt(<string>this.router.snapshot.paramMap.get('id'))
    this.userService.findById(id).subscribe(res=>{
      console.log(res)
      this.user=res
    })
  }



}
