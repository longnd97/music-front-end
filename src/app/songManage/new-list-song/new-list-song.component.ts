import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-new-list-song',
  templateUrl: './new-list-song.component.html',
  styleUrls: ['./new-list-song.component.css']
})
export class NewListSongComponent implements OnInit {
  newSongs: any;
  @Output() songId = new EventEmitter<number>();

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getMySongs();
  }

  getMySongs() {
    this.songService.getNewSongs().subscribe(res => {
      console.log(res)
      this.newSongs = res;
    });
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }
}
