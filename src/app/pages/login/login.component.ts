import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  token = "";
  request:any;
  
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  
  submit(){
    let data = this.loginForm?.value;
    this.authService.login(data).subscribe(res=>{
      
      if(res.status === 'success'){
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['']);
      }
    });
  }

  // getInforUser() {
  //   let data = this.loginForm?.value;
  //   this.authService.login(data).subscribe(res=>{
  //     localStorage.setItem('user_name', JSON.parse(res.user_name));
  //   });
  // }



}
