import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user?:User;
  formUpdate?:FormGroup;
  id?:number;
  constructor(private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private userService:UserService,
              private router: Router
  ) {}

  ngOnInit(): void {
    let userId = window.localStorage.getItem ("editUserId");

    this.formUpdate=this.fb.group({

      full_name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      address:['',[Validators.required]],
    })



  }

  getUser(id: number) {
  }

  submitForm(){
    let data=this.formUpdate?.value;
    console.log(data)
  }

  get full_name(){
    return this.formUpdate?.get('full_name')
  }
  get email(){
    return this.formUpdate?.get('email')
  }
  get phone(){
    return this.formUpdate?.get('phone')
  }
  get address(){
    return this.formUpdate?.get('address')
  }
}
