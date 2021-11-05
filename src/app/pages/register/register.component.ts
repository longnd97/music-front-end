import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm?: FormGroup;
  hide = true;
  status = '';
  message = '';
  errEmail = '';
  errUserName = '';
  errPassword = '';

  constructor(private router: ActivatedRoute,
              private route: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    window.scroll(0,330);
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    })
  }

  submit() {
    let data = this.registerForm?.value;
    this.authService.register(data).subscribe(res => {
      this.status = res.status;
      this.message = res.message;
      if (this.status === 'success') {
        alert(this.message);
        this.route.navigate(['login']);
      }
    }, (error) => {
      this.errEmail = error.error.email[0];
      this.errUserName = error.error.user_name[0];
      this.errPassword = error.error.password[0];
    })
  }
}
