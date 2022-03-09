import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.css']
})
export class FormExComponent implements OnInit {
   public userData:any={}
  constructor() { }

  ngOnInit(): void {
  }
  getData(val:NgForm){
    console.log(val)
    this.userData=val
  }
}
