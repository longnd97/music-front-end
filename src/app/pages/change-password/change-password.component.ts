import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassForm?: FormGroup;
  errCurrentPassword = '';
  errPassword = '';

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    window.scroll(0, 320);
    this.changePassForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    })
  }

  submit() {
    let data = this.changePassForm?.value;
    this.userService.changePassword(data).subscribe(res => {
      if (res.status === 'success') {
        alert(res.message);
        window.location.reload();
      } else {
        this.errCurrentPassword = res.message;
      }
    }, (error) => {
      this.errPassword = error.error.password[0];
    });
  }

}
