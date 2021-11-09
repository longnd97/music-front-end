import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-many-listens-list-song',
  templateUrl: './many-listens-list-song.component.html',
  styleUrls: ['./many-listens-list-song.component.css']
})
export class ManyListensListSongComponent implements OnInit {
  manyListensSongs: any;
  @Output() songId = new EventEmitter<number>();

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getSongsManyListensSongs();
  }

  getSongsManyListensSongs() {
    this.songService.getSongManyListens().subscribe(res => {
      this.manyListensSongs = res;
    });
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }
}

