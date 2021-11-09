import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) {
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  createPlaylist(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'playlists/create-playlist', data, {headers: this.getAuthHeaders()});
  }

  updatePlaylist(id:number, data: any): Observable<any>{
    return this.http.post(environment.api_url + 'playlists/' + id + '/update', data, {headers: this.getAuthHeaders()});
  }

  getCategories(): Observable<any> {
    return this.http.get(environment.api_url + 'categories');
  }

  getMyPlaylists(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'playlists/my-playlist/' + id, {headers: this.getAuthHeaders()});
  }

  getPlayList(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'playlists/' + id + '/get-playlist', {headers: this.getAuthHeaders()});
  }

  getSongs(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'playlists/' + id + '/get-songs', {headers: this.getAuthHeaders()});
  }

  addSong(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'playlists/add-song', data, {headers: this.getAuthHeaders()})
  }

  delete(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'playlists/' + id + '/delete', {headers: this.getAuthHeaders()})
  }

  getSongId(id: number): Observable<any> {
    return this.http.get(environment.api_url + 'playlists/' + id + '/song-id', {headers: this.getAuthHeaders()})
  }

}
