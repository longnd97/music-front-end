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
  constructor(private httpClient:HttpClient,
  ) { }

  findById(id:number){
    return this.httpClient.get(environment.api_url + 'users/' + id + '/profile')
  }

  updateById(id:number, user:User): Observable<User>{
    return this.httpClient.put<User>(environment.api_url + 'users/' + id +'/update',user)
  }

}
