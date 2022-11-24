import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';

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
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  },
  {
    path:"edit",
    component:EmployeeEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeAddComponent,
    EmployeeSearchComponent,
    EmployeeViewComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    EmployeeNavbarComponent
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
