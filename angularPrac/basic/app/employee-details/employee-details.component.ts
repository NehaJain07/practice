import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:any=[];
  constructor(private _employeeService:EmpolyeeService ) { }

  ngOnInit(){
    this.employee= this._employeeService.getEmployees();
  }

}
