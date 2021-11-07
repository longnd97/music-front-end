import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  createPlaylist(data:any): Observable<any>{
    return this.http.post(environment.api_url + 'playlists/create-playlist', data, this.getToken())
  }

  getToken(){
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
  }
}
