import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api + '/api/user'

  http = inject(HttpClient)

  constructor() { }

  createNewUser(body: User){
    return this.http.post<User>(`${this.api}/register`, body);
  }

  loginUser(body: User){
    return this.http.post<User>(`${this.api}/login`, body);
  }
}
