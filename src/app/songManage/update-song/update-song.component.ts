import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {
  updateSongForm?: FormGroup;
  categories?: any;
  image = '';
  file_mp3 = '';
  selected = '';

  constructor(private songService: SongService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.updateSongForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file_mp3: [''],
      image: [''],
      author: ['', [Validators.required]],
      album: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
    });
  }

  submit() {
    // @ts-ignore
    this.updateSongForm.controls.image.setValue(this.image);
    // @ts-ignore
    this.updateSongForm.controls.file_mp3.setValue(this.file_mp3);
    // @ts-ignore
    this.updateSongForm.controls.category_id.setValue(this.selected);
    let data = this.updateSongForm?.value;
    console.log(data);
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
    // @ts-ignore
    return this.updateSongForm.get('name');
  }

  get description() {
    // @ts-ignore
    return this.updateSongForm.get('description');
  }

  get author() {
    // @ts-ignore
    return this.updateSongForm.get('author');
  }

  get album() {
    // @ts-ignore
    return this.updateSongForm.get('album');
  }
}
