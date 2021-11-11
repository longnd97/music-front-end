import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-new-list-song',
  templateUrl: './new-list-song.component.html',
  styleUrls: ['./new-list-song.component.css']
})
export class NewListSongComponent implements OnInit {
  newSongs: any;
  user_id?: any;
  @Output() songId = new EventEmitter<number>();
  check = true;
  color?: string[] = [];
  icon?: string[] = [];
  message: string[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id');
    this.getNewSongs();
  }

  getNewSongs() {
    this.songService.getNewSongs(this.user_id).subscribe(res => {
      this.newSongs = res;
      for (let song of res) {
        if (song.status == 1) {
          // @ts-ignore
          this.color[song.id] = 'primary';
          // @ts-ignore
          this.icon[song.id] = 'thumb_up';
          // @ts-ignore
          this.message[song.id] = 'Đã thích';
        } else {
          // @ts-ignore
          this.color[song.id] = '';
          // @ts-ignore
          this.icon[song.id] = 'thumb_up_off_alt';
          // @ts-ignore
          this.message[song.id] = 'Thích';
        }
      }
    });
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }

  Liked(songId: number) {
    let data = {
      'user_id': this.user_id,
      'song_id': songId
    }
    this.songService.Liked(data).subscribe(res => {
      if (res.status == 'liked') {
        // @ts-ignore
        this.color[songId] = 'primary';
        // @ts-ignore
        this.icon[songId] = 'thumb_up';
        this.message[songId] = 'Đã thích';
      } else {
        // @ts-ignore
        this.color[songId] = '';
        // @ts-ignore
        this.icon[songId] = 'thumb_up_off_alt';
        this.message[songId] = 'Thích';
      }
    });
  }
}
