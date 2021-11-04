import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-my-list-song',
  templateUrl: './my-list-song.component.html',
  styleUrls: ['./my-list-song.component.css']
})
export class MyListSongComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [10, 20];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  mySongs: any;
  song: any;
  listSong: Track[] = [];
  user_id: any;

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id');
    this.getMySongs();
  }

  getMySongs() {
    this.songService.getMySongs(this.user_id).subscribe(res => {
      this.mySongs = res;
      for (let song of this.mySongs) {
        this.song = {
          title: song.name,
          link: song.file_mp3
        }
        // @ts-ignore
        this.listSong.push(this.song);
      }
    })
  }

  onEnded($event: string) {
    console.log($event);
  }
}
