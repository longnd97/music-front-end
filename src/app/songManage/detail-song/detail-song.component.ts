import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {SongService} from "../../services/song.service";
import {Track} from "ngx-audio-player";
import {PlaylistService} from "../../services/playlist.service";


@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent implements OnInit, OnChanges {
  @Input() songId?: number;
  @Input() playlistId?: number;
  listSong: Track[] = [];
  msaapDisplayTitle = true;
  playlist = false;
  msaapPageSizeOptions = [5, 10];
  song: any;
  id: any;

  constructor(private songService: SongService,
              private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
  }

  loadSongList(songId: number | undefined) {
    this.songService.detailSong(songId).subscribe(res => {
      this.listSong = [];
      const song = {
        title: res.name,
        link: res.file_mp3
      }
      this.listSong.unshift(song);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.playlistId) {
      this.loadPlaylist(changes.playlistId.currentValue);
    } else {
      this.loadSongList(changes.songId.currentValue);
    }
  }

  loadPlaylist(playlistId: number) {
    this.playlistService.playPlayList(playlistId).subscribe(res => {
      if (this.listSong.length != 0) {
        this.listSong = [];
      }
      for (let song of res) {
        let playSong = {
          'title': song.name,
          'link': song.file_mp3
        }
        this.listSong.push(playSong);
      }
      this.playlist = true;
    });
  }
}
