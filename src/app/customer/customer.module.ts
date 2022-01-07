import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  exports: [
    CustomerFormComponent
  ]
})
export class CustomerModule { }
