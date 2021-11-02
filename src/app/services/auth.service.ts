import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
      return this.http.post(environment.api_url + 'login', data);
  }

  getUser(token:any):Observable<any>{
    return this.http.post(environment.api_url + 'user', token);
  }

  // getInforUser(user_name:any):Observable<any>{
  //   return this.http.post(environment.api_url + '', user_name);
  // }
}
