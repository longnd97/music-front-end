import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {SingerService} from "../../services/singer.service";

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent implements OnInit {
  createSingerForm?: FormGroup;
  avatar?: string;
  selected='';
  constructor(
    private singerService: SingerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createSingerForm = this.fb.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      date_of_birth: [''],
      band: [''],
      information: ['', []],
      story: ['', []],
      avatar: ['', []],

    });
  }

  submit() {

    // @ts-ignore
    this.createSingerForm.controls.gender.setValue(this.selected);
    // @ts-ignore
    this.createSingerForm.controls.avatar.setValue(this.avatar);
    let data = this.createSingerForm?.value;
    console.log(data)
    this.singerService.createSinger(data).subscribe(res => {
      if (res.status === 'success') {
        alert(res.message);
        window.location.reload();
      }
        alert('Thêm ca sĩ thất bại !');
    });
  }
  uploadAvatar(event: string) {
    this.avatar = event;
  }
  selectedGender(event: any) {
    this.selected = event.target.value;
  }
  get name() {
    // @ts-ignore
    return this.createSingerForm.get('name');
  }
  get gender() {
    // @ts-ignore
    return this.createSingerForm.get('gender');
  }
  get date_of_birth() {
    // @ts-ignore
    return this.createSingerForm.get('date_of_birth');
  }
  get band() {
    // @ts-ignore
    return this.createSingerForm.get('band');
  }
  get information() {
    // @ts-ignore
    return this.createSingerForm.get('information');
  }

}
