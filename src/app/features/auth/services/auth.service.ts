import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'api/user'

  http = inject(HttpClient)

  constructor() { }

  createNewUser(body: User){
    this.http.post<User>(`${this.api}/register`, body);
  }
}
