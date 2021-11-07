import { Component, OnInit } from '@angular/core';
import {SongService} from "../../services/song.service";
import {ActivatedRoute} from "@angular/router";
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent implements OnInit {
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
  id: any;
  constructor(private songService:SongService,
              private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMySongs();
  }


  getMySongs() {
    let id = parseInt(<string>this.router.snapshot.paramMap.get('id'));
    this.songService.detailSong(id).subscribe(res => {
      console.log(res)
        this.song = {
          title: res.name,
          link: res.file_mp3
        }
        // @ts-ignore
        this.listSong.push(this.song);
    })
  }

  onEnded($event: string) {
    console.log($event);
  }

}
