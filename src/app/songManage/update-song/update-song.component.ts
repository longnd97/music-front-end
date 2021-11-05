import { Component, OnInit } from '@angular/core';
import {SongService} from "../../services/song.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

  constructor(private songService: SongService,
              private router: Router,
              ) { }

  ngOnInit(): void {
  }

}
