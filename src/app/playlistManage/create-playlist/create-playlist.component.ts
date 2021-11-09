import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../services/playlist.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  createPlaylistForm?:any;
  category_id?:number;
  categories: any;
  selected = '';

  constructor( private playListService:PlaylistService,
               private fb:FormBuilder,
              ) { }

  ngOnInit(): void {
    this.getCategories();
    this.createPlaylistForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      user_id: window.localStorage.getItem('id'),
    })
  }

  submit(){
    this.createPlaylistForm.controls.category_id.setValue(this.selected);
    let data = this.createPlaylistForm?.value;
    console.log(data)
    this.playListService.createPlaylist(data).subscribe(res => {
      if (res.status === 'success') {
        alert(res.message);
        window.location.reload();
      } else {
        alert("Thêm playlist thất bại");
      }
    });
  }

  selectedCategory(event: any) {
    this.selected = event.target.value;
  }

  getCategories() {
    this.playListService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

  get name() {
    // @ts-ignore
    return this.createPlaylistForm.get('name');
  }

  get description() {
    // @ts-ignore
    return this.createPlaylistForm.get('description');
  }

}
