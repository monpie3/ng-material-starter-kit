import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgePredictorModel } from '../models/age-predictor.model';

@Injectable()
export class AgePredictorsService {
  constructor(private _httpClient: HttpClient) {
  }

  predictAge(name: any): Observable<AgePredictorModel> {
    return this._httpClient.get<AgePredictorModel>(`https://api.agify.io/?name=${name}`);
  }
}
