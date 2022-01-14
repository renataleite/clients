import { ServiceProvided } from './../serviceProvided';
import { CustomerService } from './../../customer.service';
import { Customer } from './../../customer/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  customers: Customer[] = [];
  service!: ServiceProvided;
  constructor(
    private customerService: CustomerService
  ) {
    this.service = new ServiceProvided();
  }

  ngOnInit(): void {
    this.customerService
      .getCustomer()
      .subscribe(response => this.customers = response)
  }

  onSubmit(){

  }

}
