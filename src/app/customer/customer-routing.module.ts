import { LayoutComponent } from './../layout/layout.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {path: 'customer', component: LayoutComponent, children: [
      { path: 'form', component: CustomerFormComponent },
      { path: 'form/:id', component: CustomerFormComponent },
      { path: 'list', component: CustomersListComponent },
      { path: '', redirectTo: '/customer/list', pathMatch:'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
