import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;
  success: boolean = false;
  errors: String[] = [];

  constructor(private service: CustomerService ) {
    this.customer = service.getCustomer();
   }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.customer).subscribe(response => {this.success = true}, errorResponse =>{
    this.errors = errorResponse.error.errors
    })
  }
}
