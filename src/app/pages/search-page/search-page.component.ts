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
  status?: string;
  isLimit?: number;
  moreDataSong: any;
  limit = 1;
  isMore = true;
  moreDataPlaylist: any;


  constructor(private songService: SongService,
              private dataService: DataService,
              private routerActivate: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistService
  ) {
  }

  ngOnInit(): void {
      this.getSongs();
      this.getPlaylists()
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
        this.moreDataSong = this.songs.slice(0, this.limit * 6);
        this.status = '';
        if (res.length == 0) {
          this.status = 'Trống';
        }
      })

    })
  }

  getPlaylists() {
    // @ts-ignore
    this.otherMessage = this.dataService.currentMessage.subscribe(message => {
      this.otherMessage = message;
      this.playlistService.search(this.otherMessage).subscribe(res => {
        this.playlists = res;
        this.moreDataPlaylist = this.playlists.slice(0, this.limit * 6);
        this.status = '';
        if (res.length == 0) {
          this.status = 'Trống';
        }
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

  getPlaylist(event: any, id: number) {
    event.preventDefault();
    this.router.navigate(['playlist/' + id + '/detail']);
  }

  onMore() {
    this.isLimit = this.songs.length - 6 * this.limit;
    this.limit += 1;
    this.getSongs();
    if (this.isLimit > 6) {
      this.isMore = true;
    } else {
      this.isMore = false;
    }
  }

  onMorePlaylist() {
    this.isLimit = this.songs.length - 6 * this.limit;
    this.limit += 1;
    this.getPlaylists();
    if (this.isLimit > 6) {
      this.isMore = true;
    } else {
      this.isMore = false;
    }
  }

}
