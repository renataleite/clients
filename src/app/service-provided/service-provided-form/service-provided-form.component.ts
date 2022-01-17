import { ServiceProvidedService } from './../../service-provided.service';
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
  serviceProvided!: ServiceProvided;
  success: boolean = false;
  errors: String[] | null = [];
  constructor(
    private customerService: CustomerService,
    private service: ServiceProvidedService
  ) {
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.customerService
      .getCustomer()
      .subscribe(response => this.customers = response)
  }

  onSubmit(){
    this.service
    .save(this.serviceProvided)
    .subscribe( response => {
      this.success = true;
      this.errors = null;
      this.serviceProvided = new ServiceProvided();
    }, errorResponse => {
      this.errors = errorResponse.error.erros;
    })
  }

}
