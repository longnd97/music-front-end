import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?:User;
  baseUrl=environment.api_url
  constructor(private httpClient:HttpClient,
  ) { }

  getById(id:number){
    return this.httpClient.get( this.baseUrl+ 'users/' + id + '/profile')
  }

  updateById(id:number, user:User): Observable<User>{
    return this.httpClient.put<User>(this.baseUrl + 'users/' + id +'/update',user)
  }

}
