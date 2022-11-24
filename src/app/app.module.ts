import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:EmployeeAddComponent
  },
  {
    path:"search",
    component:EmployeeSearchComponent
  },
  {
    path:"view",
    component:EmployeeViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeAddComponent,
    EmployeeSearchComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
