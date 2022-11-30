import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: UserModel): Observable<UserModel> {
    return this._httpClient.post<UserModel>("https://fakestoreapi.com/users", user);
  }

  getOne(id: string): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://fakestoreapi.com/users/${id}`);
  }
}
