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
    });
  }
  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }
}
