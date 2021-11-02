import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-songs',
  templateUrl: './create-songs.component.html',
  styleUrls: ['./create-songs.component.css']
})
export class CreateSongsComponent implements OnInit {
  createSongForm?: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createSongForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file_mp3: ['', [Validators.required]],
      image: ['', [Validators.required]],
      author: ['', [Validators.required]],
      album: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]]
    })
  }

  submit() {

  }

  uploadImage($event: Event) {
    
  }
}
