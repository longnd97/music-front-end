import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {SingerService} from "../../services/singer.service";
import {ERROR} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";
import {error} from "@angular/compiler-cli/src/transformers/util";

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
      date_of_birth: ['',[Validators.required]],
      band: ['',[Validators.required]],
      information: ['', [Validators.required]],
      story: ['', [Validators.required]],
      avatar: [''],

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
      } else
      {
        alert(res.message);
      }
    });
  }
  uploadAvatar(event: string) {
    this.avatar = event;
  }
  selectedGender(event: any) {
    this.selected = event.target.value;
  }


  get name() {
    return this.createSingerForm?.get('name');
  }
  get gender() {
    return this.createSingerForm?.get('gender');
  }
  get date_of_birth() {
    return this.createSingerForm?.get('date_of_birth');
  }
  get band() {
    return this.createSingerForm?.get('band');
  }
  get information() {
    return this.createSingerForm?.get('information');
  }
  get story() {
    return this.createSingerForm?.get('story');
  }

}
