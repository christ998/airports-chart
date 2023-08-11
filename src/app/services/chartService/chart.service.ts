import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getChart(number:string, icao:string, country:string): Observable<any> {
    const apiUrl = environment.apiUrl
    return this.httpClient.get(apiUrl + `/${country}/${icao}/${number}`, {responseType: 'blob'})
  }


}
