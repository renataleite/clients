import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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

  constructor(
    private service: CustomerService,
    private router: Router
    ) {
    this.customer = new Customer();
   }

  ngOnInit(): void {

  }

  backList(){
    this.router.navigate(['/customer-list'])
  }

  onSubmit(){
    this.service.save(this.customer).subscribe(response => {this.success = true, this.errors = [], this.customer = response}, errorResponse =>{
    this.success = false;
    this.errors = errorResponse.error.errors
    })
  }
}
