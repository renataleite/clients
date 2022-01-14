import { ServiceProvidedListComponent } from './service-provided-list/service-provided-list.component';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'service-provided-form', component: ServiceProvidedFormComponent},
  {path: 'service-provided-list', component: ServiceProvidedListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvidedRoutingModule { }
