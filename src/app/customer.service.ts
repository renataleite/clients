import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL: string = environment.apiURL + '/api/clientes';

  constructor(private http: HttpClient ) { }

  save(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiURL, customer);
  }

  update(customer: Customer): Observable<any>{
    return this.http.put<Customer>(`${this.apiURL}/${customer.id}`, customer);
  }

  getCustomer() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiURL);
  }

  getCustomerById(id: number) : Observable<Customer>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  delete(customer: Customer) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${customer.id}`)
  }
}
