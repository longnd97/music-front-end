import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute,ParamMap} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  formUpdate?:FormGroup;
  id?:number;
  constructor(private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private userService:UserService
  ) {

  }

  ngOnInit(): void {
  }

  getUser(id: number) {

  }

}
