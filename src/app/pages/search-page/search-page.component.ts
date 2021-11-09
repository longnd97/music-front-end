import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Track} from "ngx-audio-player";
import {PlaylistService} from "../../services/playlist.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  songs?: any
  key?: string
  otherMessage?: string;
  id?: any;
  value?: number;
  songId?: number;
  playlists: any;
  status?:string;


  constructor(private songService: SongService,
              private dataService: DataService,
              private routerActivate: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistService
  ) {
  }

  ngOnInit(): void {
    this.getSongs()
  }

  getKey() {
    // @ts-ignore
  }

  getSongs() {
    // @ts-ignore
    this.otherMessage = this.dataService.currentMessage.subscribe(message => {
      this.otherMessage = message;
      this.songService.search(this.otherMessage).subscribe(res => {
        this.songs = res;
        this.status='';
        if(res.length==0){
          this.status='trống';
        }
        console.log(this.songs)
      })
      this.playlistService.search(this.otherMessage).subscribe(res=>{
        this.playlists = res;
        this.status='';
        if(res.length==0){
          this.status='trống';
        }
        console.log(this.playlists)
      })
    })
  }


  back() {
    this.otherMessage = '';
    this.songs = [];
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId = songId;
  }

  getPlaylist(event: any,id: number) {
    event.preventDefault();
    this.router.navigate(['playlist/' + id + '/detail']);
  }
}
