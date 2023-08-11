import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProceduresModel } from '../../models/procedures.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  apiUrl = environment.apiUrl;
  procedures: ProceduresModel = []

  constructor(private httpClient: HttpClient) {}

  getProcedures(icao_code: string): Observable<ProceduresModel> {
    return this.httpClient.get(this.apiUrl + `/${icao_code}/procedures`);
  }

  setProcedures(data: ProceduresModel) {
    this.procedures = data
  }

}
