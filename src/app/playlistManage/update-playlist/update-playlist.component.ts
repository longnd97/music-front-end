import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlaylistService} from "../../services/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {
  updatePlaylistForm?: FormGroup;
  category_id?:number;
  categories: any;
  selected = '';
  id = this.routerGetIdURL.snapshot.params.id;

  constructor(private playListService: PlaylistService,
              private fb: FormBuilder,
              private routerGetIdURL: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories();
    let id = this.routerGetIdURL.snapshot.params.id;
    this.updatePlaylistForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
    });
    this.playListService.getPlayList(id).subscribe(res=>{
      console.log(res)
      this.updatePlaylistForm?.setValue({
        name: res.name,
        description: res.description,
        category_id: res.category_id,
      })
    })
  }

  submit() {
    // @ts-ignore
    this.updatePlaylistForm.controls.category_id.setValue(this.selected);
    let id = this.id;
    let data = this.updatePlaylistForm?.value;
    this.playListService.updatePlaylist(id, data).pipe(first()).subscribe(res=>{
      if (res.status === 'success'){
        alert(res.message);
        this.router.navigate(['playlist/my-playlist']);
      } else if(res.status === 'error') {
        alert(res.message);
      }
    })
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
    return this.updatePlaylistForm.get('name');
  }

  get description() {
    // @ts-ignore
    return this.updatePlaylistForm.get('description');
  }

}
