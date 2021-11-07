import {Component, OnInit} from '@angular/core';
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( private songService:SongService) { }


  ngOnInit(): void {

  }

  onChangeAvatar($event: string) {
    console.log('avatar ===> ', $event)
  }


}
