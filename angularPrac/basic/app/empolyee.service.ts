import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1,"ename":"Mary","age":25},
      {"id":2,"ename":"Sam","age":30},
      {"id":3,"ename":"James","age":31},
    ]
  }
}
