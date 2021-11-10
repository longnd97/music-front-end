import {Component,EventEmitter, Output, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";


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
  image?: string | undefined = '';
  selectedFile?: File;
  ref?: AngularFireStorageReference;
  downloadURL?: string;
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private songService: SongService,
              private fb: FormBuilder,
              private routerGetIdURL: ActivatedRoute,
              private router: Router,
              private afStorage: AngularFireStorage) {
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
      this.image = res.image;
      console.log(this.image);
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
    // this.updateSongForm.controls.image.setValue(this.image);
    // @ts-ignore
    this.updateSongForm.controls.file_mp3.setValue(this.file_mp3);
    // @ts-ignore
    this.updateSongForm.controls.category_id.setValue(this.selected);
    let id = this.id;
    let data = this.updateSongForm?.value;
    this.songService.updateSong(id, data).subscribe(res=>{
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
      this.image='';
      return this.downloadURL;
    })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      })
  }
}
