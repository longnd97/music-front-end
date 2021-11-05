import { Component, OnInit } from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-all-song',
  templateUrl: './all-song.component.html',
  styleUrls: ['./all-song.component.css']
})
export class AllSongComponent implements OnInit {
  songs?:any
  constructor(private serviceSong:SongService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.serviceSong.getAll().subscribe(res=>{
      console.log(res)
      this.songs=res
    })
  }
}
