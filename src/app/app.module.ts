import { ServiceProvidedService } from './service-provided.service';
import { CustomerService } from './customer.service';
import { CustomerModule } from './customer/customer.module';
import { TemplateModule } from './template/template.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvidedModule } from './service-provided/service-provided.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    CustomerModule,
    HttpClientModule,
    ServiceProvidedModule
  ],
  providers: [
    CustomerService,
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
