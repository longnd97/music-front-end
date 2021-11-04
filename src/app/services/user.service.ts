import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;
  baseUrl = environment.api_url
  private header: any;
  token: any;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient,) {
  }

  getById(id: number) {
    return this.httpClient.get(this.baseUrl + 'users/' + id, {headers: this.getAuthHeaders()})
  }

  updateById(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + 'users/' + id + '/update', user, {headers: this.getAuthHeaders()})
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  getInfoUserLogin(): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'users/me', null, {headers: this.getAuthHeaders()})
  }
}
