import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {
  updateSongForm?: FormGroup;
  categories?: any;
  file_mp3 = '';
  selected = '';
  id = this.routerGetIdURL.snapshot.params.id;
  data: any;
  image?: string;


  constructor(private songService: SongService,
              private fb: FormBuilder,
              private routerGetIdURL: ActivatedRoute,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.getCategories();
    let id = this.routerGetIdURL.snapshot.params.id;
    this.updateSongForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file_mp3: [''],
      image: [''],
      author: ['', [Validators.required]],
      album: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
    })
    this.songService.detailSongId(id).subscribe(res => {
      this.updateSongForm?.setValue({
        name: res.name,
        description: res.description,
        file_mp3: res.file_mp3,
        image: res.image,
        author: res.author,
        album: res.album,
        category_id: res.category_id,
      })
    })
  }

  submit() {
    // @ts-ignore
    this.updateSongForm.controls.image.setValue(this.image);
    // @ts-ignore
    this.updateSongForm.controls.file_mp3.setValue(this.file_mp3);
    // @ts-ignore
    this.updateSongForm.controls.category_id.setValue(this.selected);
    let id = this.id;
    let data = this.updateSongForm?.value;
    this.songService.updateSong(id, data).pipe(first()).subscribe(res=>{
      if (res.status === 'success'){
        alert(res.message);
        this.router.navigate(['songs/my-songs']).then();
      } else if(res.status === 'error') {
        alert(res.message);
      }
    })
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
