import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
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
import { ServiceProvidedModule } from './service-provided/service-provided.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    CustomerModule,
    HttpClientModule,
    ServiceProvidedModule,
    FormsModule
  ],
  providers: [
    CustomerService,
    ServiceProvidedService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
