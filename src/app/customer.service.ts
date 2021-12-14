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

  getCustomer() : Customer{
    let customer : Customer = new Customer();
    customer.name= "Fulano de Tal";
    customer.cpf= "231654789";
    return customer;
  }
}
