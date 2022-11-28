import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginsService {
  constructor(private _httpClient: HttpClient) {
  }

  login(login: any): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>("https://fakestoreapi.com/auth/login", login);
  }
}
