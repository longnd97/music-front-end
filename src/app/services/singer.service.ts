import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient) { }


  getToken() {
    let t = localStorage.getItem('token');
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });
    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
  }
  createSinger(data: any): Observable<any> {
    return this.http.post(environment.api_url + 'singers/create', data, this.getToken());
  }
  getAll():Observable<any>{
    return this.http.get(environment.api_url + 'singers/list', this.getToken())
  }

}
