import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-many-listens-list-song',
  templateUrl: './many-listens-list-song.component.html',
  styleUrls: ['./many-listens-list-song.component.css']
})
export class ManyListensListSongComponent implements OnInit {
  manyListensSongs: any;
  user_id?: any;
  color?: string[] = [];
  icon?: string[] = [];
  message: string[] = [];
  @Output() songId = new EventEmitter<number>();

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id');
    this.getSongsManyListensSongs();
  }

  getSongsManyListensSongs() {
    this.songService.getSongManyListens().subscribe(res => {
      this.manyListensSongs = res;
      for (let song of res) {
        if (song.status == 1) {
          // @ts-ignore
          this.color[song.song_id] = 'primary';
          // @ts-ignore
          this.icon[song.song_id] = 'thumb_up';
          // @ts-ignore
          this.message[song.song_id] = 'Đã thích';
        } else {
          // @ts-ignore
          this.color[song.song_id] = '';
          // @ts-ignore
          this.icon[song.song_id] = 'thumb_up_off_alt';
          // @ts-ignore
          this.message[song.song_id] = 'Thích';
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
      console.log(res);
      if (res.status === 'liked') {
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

