import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'customer-list', component: CustomersListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
