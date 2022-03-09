import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 
  constructor() { 
    /* this.userdata.getUser().subscribe(data => { 
      console.log("data", data)
      this.userPost=data
    }
      ); */
  }

  ngOnInit(): void {
  }

loginForm = new FormGroup({
  title:new FormControl('',[Validators.required]),
  body:new FormControl('',[Validators.required]),
  likes:new FormControl('',[Validators.required])
});
loginUser(){
  console.log(this.loginForm.value)
}
get title(){
  return this.loginForm.get('title')
}
get body(){
  return this.loginForm.get('body')
}
get likes(){
  return this.loginForm.get('likes')
}
}
