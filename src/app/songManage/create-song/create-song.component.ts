import {Component, OnInit} from '@angular/core';
  import {Song} from "../../interfaces/song";
import {SongService} from "../../services/song.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  createSongForm?: FormGroup;
  categories?: any;
  image = '';
  file_mp3 = '';
  selected = '';

  constructor(private songService: SongService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.createSongForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file_mp3: [''],
      image: [''],
      author: ['', [Validators.required]],
      album: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      user_id: localStorage.getItem('id')
    });
  }

  submit() {
    // @ts-ignore
    this.createSongForm.controls.image.setValue(this.image);
    // @ts-ignore
    this.createSongForm.controls.file_mp3.setValue(this.file_mp3);
    // @ts-ignore
    this.createSongForm.controls.category_id.setValue(this.selected);
    let data = this.createSongForm?.value;
    console.log(data)
    this.songService.createSong(data).subscribe(res => {
      if (res.status === 'success') {
        alert(res.message);
        window.location.reload();
      } else {
        alert("Thêm bài hát thất bại");
      }
    });
  }

  uploadAvatar(event: string) {
    this.image = event;
  }

  uploadFile(event: string) {
    this.file_mp3 = event;
  }

  selectedCategory(event: any) {
    this.selected = event.target.value;
  }

  getCategories() {
    this.songService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

  get name() {
    return this.createSongForm?.get('name');
  }

  get description() {
    return this.createSongForm?.get('description');
  }

  get author() {
    return this.createSongForm?.get('author');
  }

  get album() {
    return this.createSongForm?.get('album');
  }
}
