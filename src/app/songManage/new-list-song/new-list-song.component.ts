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

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id')
    this.getMySongs();
  }

  getMySongs() {
    this.songService.getNewSongs().subscribe(res => {
      this.newSongs = res;
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
      console.log(res)
      if (res.status === 'liked') {
        this.check = false;
        // // @ts-ignore
        // document.getElementsByClassName('song-liked-' + songId)[0].style.visibility = 'hidden';
        // // @ts-ignore
        // document.getElementsByClassName('song-unliked-' + songId)[0].style.visibility = 'show';
      } else {
        this.check = true;
        // // @ts-ignore
        // document.getElementsByClassName('song-liked-' + songId)[0].style.visibility = 'show';
        // // @ts-ignore
        // document.getElementsByClassName('song-unliked-' + songId)[0].style.visibility = 'hidden';
      }
    });
  }
}
