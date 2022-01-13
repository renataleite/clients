import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer!: Customer;
  successMessage!: string;
  errorMessage!: string;

  constructor(
    private service: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service
    .getCustomer()
    .subscribe(response => this.customers = response)
  }

  newRegister(){
    this.router.navigate(['/customer-form']);
  }

  prepareDeletion(customer: Customer){
    this.selectedCustomer = customer;
  }
  deleteCustomer(){
    this.service
      .delete(this.selectedCustomer)
      .subscribe(
        response => {
          this.successMessage = 'Customer successfully deleted';
          this.ngOnInit();
        },
        erro => this.errorMessage = 'An error occurred while deleting a client'
      )
  }
}
