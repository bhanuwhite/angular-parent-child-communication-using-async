import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../app.constants';
import { User } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<User[]>(Constants.DataApi)
  }
}
