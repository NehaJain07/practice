import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmpolyeeService } from './empolyee.service';
import { TestComponent } from './test/test.component';
import { TestNewComponent } from './test-new/test-new.component';
import { FormExComponent } from './form-ex/form-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptialCasePipe } from './captial-case.pipe';
import { BoldRedDirective } from './bold-red.directive';
import { NoPageComponent } from './no-page/no-page.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { HttpClientModule }  from '@angular/common/http';
import { UserHttpComponent } from './user-http/user-http.component'
import { UserDataService } from './user-data.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    TestComponent,
    TestNewComponent,
    FormExComponent,
    CaptialCasePipe,
    BoldRedDirective,
    NoPageComponent,
    Test1Component,
    Test2Component,
    UserHttpComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmpolyeeService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
