import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/serviceProvided';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURL + "api/service-provided";

  constructor( private httpClient: HttpClient) { }

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided>{
    return this.httpClient.post<ServiceProvided>(this.apiURL, serviceProvided);
  }
}
