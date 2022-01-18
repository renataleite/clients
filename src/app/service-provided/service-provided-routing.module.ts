import { LayoutComponent } from './../layout/layout.component';
import { ServiceProvidedListComponent } from './service-provided-list/service-provided-list.component';
import { ServiceProvidedFormComponent } from './service-provided-form/service-provided-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:'service-provided', component:LayoutComponent, canActivate: [AuthGuard],children:[
    {path: 'form', component: ServiceProvidedFormComponent},
    {path: 'list', component: ServiceProvidedListComponent},
    {path: '', redirectTo: '/service-provided/list', pathMatch:'full'},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvidedRoutingModule { }
