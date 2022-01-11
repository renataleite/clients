import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient ) { }

  save(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>('http:/localhost:8080/api/clientes', customer);
  }

  update(customer: Customer): Observable<any>{
    return this.http.put<Customer>(`http://localhost:8080/api/clients/${customer.id}`, customer);
  }

  getCustomer() : Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/api/clients');
  }

  getCustomerById(id: number) : Observable<Customer>{
    return this.http.get<any>(`http://localhost:8080/api/clients/${id}`);
  }
}
