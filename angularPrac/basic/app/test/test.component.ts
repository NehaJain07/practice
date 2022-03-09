import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route:ActivatedRoute) { }
 prntData: number=0;
  @Output() updTitleEv=new EventEmitter<string>();
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params.prntData); 
      this.prntData=params.prntData
    }
  );    
  }
 getInput(val:any){
   console.log(val)
   this.displayBox=val
 }
 toggle(){
   this.disp=!this.disp;
 }
 updateData(){
  this.prntData=Math.floor(Math.random() * 20);
}
}
