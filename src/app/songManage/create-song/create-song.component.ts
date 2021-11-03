import {Component, OnInit} from '@angular/core';
import {Song} from "../../interfaces/song";
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  form: any = {};
  song?: Song;

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {

  }

  ngSubmit() {
    this.song = new Song(
      this.form.name,
      this.form.description,
      this.form.file_mp3,
      this.form.image,
      this.form.author,
      this.form.album
    )
    this.songService.createSong(this.song).subscribe(res => {
      alert(res.message);
      window.location.reload();
    })
  }

  uploadAvatar($event: string) {
    this.form.image = $event;
    console.log('image --> ', this.form.image)
  }

  uploadFile($event: string) {
    this.form.file_mp3 = $event
    console.log('file_mp3 -->', this.form.file_mp3)
  }
}
