import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormExComponent } from './form-ex/form-ex.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TestNewComponent } from './test-new/test-new.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserHttpComponent } from './user-http/user-http.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/basic-test',
    pathMatch:'full'
  },
  {
    component:EmployeeListComponent,
    path:'employee-list'
  },
  {
    component:EmployeeDetailsComponent,
    path:'employee-details'
  },
  {
    component:FormExComponent,
    path:'form-ex'
  },
  {
    component:TestComponent,
    path:'basic-test',
    children:[
      {path:'test1', component:Test1Component},
      {path:'test2', component:Test2Component}
    ]
  },
  {
    component:TestNewComponent,
    path:'test'
  },
  {
    component:UserHttpComponent,
    path:'user'
  },
  {
    component:UserFormComponent,
    path:'user-form'
  },
  {
    component:NoPageComponent,
    path:'**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
