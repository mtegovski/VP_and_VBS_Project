import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  private URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getDisease(): Observable<string> {
    return this.http.get<string>(`${this.URL}/api/home`);
  }
}
