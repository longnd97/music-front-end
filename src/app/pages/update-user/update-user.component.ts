import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";

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
  avatar: string | undefined = '';
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL?: string;
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private afStorage: AngularFireStorage
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
      this.avatar=res.avatar;
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
     /* this.formUpdate.controls.avatar.setValue(this.avatar);*/
      let data = this.formUpdate?.value;
      this.userService.updateById(id, data).subscribe(
        res => {
          this.router.navigate(['users']).then(() => {
            window.location.reload();
          });
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

  onUpload($event: any) {
    this.selectedFile = $event.target.files[0];
    this.checkUploadAvatar = true;
    const id = Math.random().toString(36).substring(2); //Tạo ra 1 name riêng cho mỗi DB firebase;
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile).then(snapshot => {
      return snapshot.ref.getDownloadURL(); //Tra ve 1 chuoi sieu van ban tren FB.
    }).then(downloadURL => { //chuyen giao link tu nhung component khac nhau khi su upload
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      this.checkUploadAvatar = false;
      this.avatar='';
      return this.downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }
}
