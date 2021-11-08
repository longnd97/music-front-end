import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";
import {Track} from "ngx-audio-player";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-list-song',
  templateUrl: './my-list-song.component.html',
  styleUrls: ['./my-list-song.component.css']
})
export class MyListSongComponent implements OnInit {
  mySongs: any;
  song: any;
  listSong: Track[] = [];
  user_id: any;
  id: any;
  songId?: number;

  constructor(private songService: SongService,
              private router: Router
  ) {
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

  updateSong(songId: number) {
    this.router.navigate(['songs/my-songs/' + songId + '/update']).then();
  }

  deleteSong(songId: number) {
    if (confirm(" Bạn có chắc chắn muốn xoá bài hát ? ")) {
      this.songService.deleteSong(songId).subscribe(res => {
        this.song = res;
        this.getMySongs();
      })
    }
  }

  playSong(event: any, songId: number) {
    event.preventDefault();
    this.songId = songId;
  }
}
