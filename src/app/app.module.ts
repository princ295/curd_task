import { EmployeeService } from './shared/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
