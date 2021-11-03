import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  check = false;
  name:any;
  data:any;
  user?:User;
  formUpdate?:FormGroup;
  id?:number;
  ref:any;
  task:any;
  uploadProgress:any;
  downloadURL:any;

  constructor(private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private userService:UserService,
              private router: Router,
              private storage: AngularFireStorage,

  ) {}

  ngOnInit(): void {
    if(window.localStorage.getItem('user')) {
      this.check = true;
      this.data = localStorage.getItem('user');
      this.user = JSON.parse(this.data);
      console.log(this.user)
    }

    this.formUpdate=this.fb.group({

      full_name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      address:['',[Validators.required]],

    })
    let id=this.user?.id;
    if (id != null) {
      this.userService.getById(id).subscribe((res: User) => {
        this.user = res;
        console.log(this.user);
        this.formUpdate?.setValue({
          full_name: res.full_name,
          email: res.email,
          phone: res.phone,
          address: res.address,
        })
      })
    }


  }

  submitForm() {
    let id = this.user?.id;
    if (id != null) {
      let data = this.formUpdate?.value;
      this.userService.updateById(id, data).pipe(first()).subscribe(
      )
      /* this.route.navigate(['admin/users'])*/
    }


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
