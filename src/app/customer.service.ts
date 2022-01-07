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

/*   getCustomer() : Customer[]{
    let customer = new Customer();
    customer.id = 1;
    customer.name = 'Fulano';
    customer.registerDate = "18/04/2020";
    customer.cpf = '1234567';
    return [customer];
  } */

  getCustomer() : Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/api/clients');
  }
}
