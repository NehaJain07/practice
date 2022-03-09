import { Component, Input, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() EmployeeName ?: string;
  /* public employee=[
    {"id":1,"ename":"Mary","age":25},
    {"id":2,"ename":"Sam","age":30},
    {"id":3,"ename":"James","age":31},
  ]
  constructor() { }

  ngOnInit(): void {
  } */
  public employee:any=[];
  constructor(private _employeeService:EmpolyeeService ) { }

  ngOnInit(){
    this.employee= this._employeeService.getEmployees();
  }

}
