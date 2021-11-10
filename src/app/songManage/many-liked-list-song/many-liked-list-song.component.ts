import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-many-liked-list-song',
  templateUrl: './many-liked-list-song.component.html',
  styleUrls: ['./many-liked-list-song.component.css']
})
export class ManyLikedListSongComponent implements OnInit {
  manyLikedSongs: any;
  user_id?: any;
  color?: string[] = [];
  icon?: string[] = [];
  message: string[] = [];
  @Output() songId = new EventEmitter<number>();

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id');
    this.getSongsManyLikedSongs();
  }

  getSongsManyLikedSongs() {
    this.songService.getSongManyLiked().subscribe(res => {
      this.manyLikedSongs = res;
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
