import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer!: Customer;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
