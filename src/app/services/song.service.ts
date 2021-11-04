import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  createSong(data: any): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.post(environment.api_url + 'songs/create-song', data, httpOptions);
  }

  getCategories(): Observable<any> {
    return this.http.get(environment.api_url + 'categories');
  }

  getMySongs(id: any): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(environment.api_url + 'my-songs/' + id, httpOptions);
  }
}
