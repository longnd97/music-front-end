import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-all-song',
  templateUrl: './all-song.component.html',
  styleUrls: ['./all-song.component.css']
})
export class AllSongComponent implements OnInit {
  songs?: any;
  @Output() songId = new EventEmitter<number>();

  constructor(private serviceSong: SongService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.serviceSong.getAll().subscribe(res => {
      console.log(res)
      this.songs = res
    })
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }

}
