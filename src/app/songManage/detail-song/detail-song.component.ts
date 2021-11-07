import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {SongService} from "../../services/song.service";
import {Track} from "ngx-audio-player";


@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent implements OnInit, OnChanges {
  @Input() songId?: number;
  listSong: Track[] = [];
  msaapDisplayTitle = true;
  msaapPageSizeOptions = [10, 20];
  song: any;
  id: any;

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
  }

  loadSongList(songId: number | undefined) {
    this.songService.detailSong(songId).subscribe(res => {
      const song = {
        title: res.name,
        link: res.file_mp3
      }
      this.listSong.unshift(song);
    });
    // let element: HTMLElement = document.getElementsByClassName('play-track')[0] as HTMLElement;
    // element.click();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadSongList(changes.songId.currentValue);
  }

}
