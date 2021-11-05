import { Component, OnInit } from '@angular/core';
import {SongService} from "../../services/song.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})
export class DetailSongComponent implements OnInit {

  constructor(private songService:SongService,
              private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  detailSong(){
    let id = parseInt(<string>this.router.snapshot.paramMap.get('id'));
    this.songService.detailSong(id).subscribe(res=>{
      console.log(res)
    })
  }

}
