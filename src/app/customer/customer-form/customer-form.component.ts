import { Observable } from 'rxjs';
import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  customer: Customer;
  success: boolean = false;
  errors: String[] = [];
  id: number | undefined;

  constructor(
    private service: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getCustomerById(this.id).subscribe(
          (response) => (this.customer = response),
          (errorReponse) => (this.customer = new Customer())
        );
      }
    });
  }

  backList() {
    this.router.navigate(['/customer-list']);
  }

  onSubmit() {
    this.service.save(this.customer).subscribe(
      (response) => {
        (this.success = true), (this.errors = []), (this.customer = response);
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
