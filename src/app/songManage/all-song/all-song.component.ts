import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-all-song',
  templateUrl: './all-song.component.html',
  styleUrls: ['./all-song.component.css']
})
export class AllSongComponent implements OnInit {
  songs?: any;
  isLimit?: number;
  moreData: any;
  limit = 1;
  isMore = true;
  @Output() songId = new EventEmitter<number>();

  constructor(private serviceSong: SongService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.serviceSong.getAll().subscribe(res => {
      this.songs = res;
      this.moreData = this.songs.slice(0, this.limit * 6);
    })
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId.emit(songId);
  }

  onMore() {
    this.isLimit = this.songs.length - 6 * this.limit;
    this.limit += 1;
    this.getAll();
    if (this.isLimit > 6) {
      this.isMore = true;
    } else {
      this.isMore = false;
    }
  }

}
