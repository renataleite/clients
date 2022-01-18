import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/serviceProvided';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceProvidedSearch } from './service-provided/service-provided-list/serviceProvidedSearch';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURL + "api/service-provided";

  constructor( private httpClient: HttpClient) { }

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided>{
    return this.httpClient.post<ServiceProvided>(this.apiURL, serviceProvided);
  }

  search(name: string, month: number) : Observable<ServiceProvidedSearch>{
    const httpParams = new HttpParams()
      .set("name", name)
      .set("month", month ? month.toString():'');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.httpClient.get<any>(url);
  }
}
