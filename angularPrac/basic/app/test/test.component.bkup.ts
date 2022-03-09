import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public dateNw=new Date();
 public disp=false;
 public dispShow=true;
 public color="blue";
 public firstnam:string='Vishwas';
 public displayBox:string='';
 public name:any[]=["sam","mac"]
  constructor() { }
  @Input() prntData:any;
  @Output() updTitleEv=new EventEmitter<string>();
  ngOnInit(): void {
  }
 getInput(val:any){
   console.log(val)
   this.displayBox=val
 }
 toggle(){
   this.disp=!this.disp;
 }
}
