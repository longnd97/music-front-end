import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-list-all-song',
  templateUrl: './list-all-song.component.html',
  styleUrls: ['./list-all-song.component.css']
})
export class ListAllSongComponent implements OnInit {

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
  }

}
