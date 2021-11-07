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

  detailSongId(id: number): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get(environment.api_url + 'songs/' + id + '/detailSong', httpOptions);
  }

  updateSong(id: number, data: any): Observable<any> {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    })
    const httpOptions = {
      headers: headers_object
    };
    return this.http.put(environment.api_url + 'songs/' + id + '/update', data, httpOptions);
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
    return this.http.get(environment.api_url + 'songs/my-songs/' + id, httpOptions);
  }

  getNewSongs(): Observable<any> {
    return this.http.get(environment.api_url + 'new-songs/');
  }

  detailSong(id:any): Observable<any>{
    return this.http.get(environment.api_url +'songs/'+id+ '/play');
  }

  getAll():Observable<any>{
    return this.http.get(environment.api_url + 'songs/list');
  }

  search(key:string):Observable<any>{
    // @ts-ignore
    return this.http.get(environment.api_url + 'songs/search/'+ key)
  }

}


