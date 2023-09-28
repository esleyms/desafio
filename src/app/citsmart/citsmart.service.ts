import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICitsmart } from '../model/citsmart-login.model';
import { ICitsmartDataQuery } from '../model/citsmart-data-query.model';
import { ICitsmartData } from '../model/citsmart-data.model';
import { ICitsmartToken } from '../model/citsmart-token.model';

export type EntityResponseType = HttpResponse<ICitsmartToken>;
export type EntityResponseTypeData = HttpResponse<ICitsmartData>;

@Injectable({
  providedIn: 'root'
})
export class CitsmartService {
  protected resourceUrl = 'https://gsm-hmg.centralitcloud.com.br/citsmart/services';

  constructor(protected http: HttpClient) { }


  login(citsmart: ICitsmart): Observable<EntityResponseType> {
    return this.http.post<ICitsmartToken>(this.resourceUrl+'/login', citsmart, {observe: 'response'});
  }

  getDados(citsmart: ICitsmartDataQuery): Observable<EntityResponseTypeData> {
    return this.http.post<ICitsmartData>(this.resourceUrl+'/data/query', citsmart, {observe: 'response'});
  }

}
