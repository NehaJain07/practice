import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-component';
  ename: string ="Mactonish";
  parentData = 20;

  user=[
    {"id":1,"ename":"Mary","age":25},
    {"id":2,"ename":"Sam","age":30},
    {"id":3,"ename":"James","age":31},
  ];
  updateData(){
    this.parentData=Math.floor(Math.random() * 20);
  }
  updateTitle(data:string){
    console.log(data)
    this.title=data;
  }
}
