import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {
  user_id: any;
  myPlaylists: any;
  playlist: any;
  id?: any;

  constructor(private playlistService: PlaylistService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('id');
    this.getMyPlaylists();
  }

  getMyPlaylists() {
    this.playlistService.getMyPlaylists(this.user_id).subscribe(res => {
      this.myPlaylists = res;
    })
  }

  getPlaylist(id: number) {
    this.router.navigate(['playlist/' + id + '/detail']);
  }

  updatePlaylist(id: number) {
    this.router.navigate(['playlist/' + id + '/update'])
  }

  deletePlaylist(id: number) {
    if (confirm(" Bạn có chắc chắn muốn xoá playlist ? ")) {
      this.playlistService.delete_playlist(id).subscribe(res => {
        this.getMyPlaylists();
      });
    }
  }
}

