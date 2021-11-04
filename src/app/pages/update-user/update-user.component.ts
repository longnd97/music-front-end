import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  formUpdate?: FormGroup;
  check = false;
  name: any;
  data: any;
  user?: User;
  id?: number;
  uploadProgress: any;
  avatar = '';
  private token?: string | null;

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.formUpdate = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required]],
      avatar: [''],
    })
   /* let id = this.user?.id;
    if (id != null) {*/
      this.userService.getInfoUserLogin().subscribe((res: User) => {
        this.user = res;
        console.log(this.user);
        this.formUpdate?.setValue({
          full_name: res.full_name,
          phone: res.phone,
          address: res.address,
          avatar: res.avatar,
        })
      })

  }

  submitForm() {
    let id = this.user?.id;
    if (id != null) {
      // @ts-ignore
      this.formUpdate.controls.avatar.setValue(this.avatar);
      let data = this.formUpdate?.value;
      console.log(data);
      this.userService.updateById(id, data).pipe(first()).subscribe(
        res => {
          this.router.navigate(['users']);
        },
        error => {
          alert(error);
        });
    }
  }

  uploadAvatar(event: string) {
    this.avatar = event;
  }

  get full_name() {
    return this.formUpdate?.get('full_name')
  }

  get phone() {
    return this.formUpdate?.get('phone')
  }

  get address() {
    return this.formUpdate?.get('address')
  }

}
