import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-http',
  templateUrl: './user-http.component.html',
  styleUrls: ['./user-http.component.css']
})
export class UserHttpComponent implements OnInit {
  userFetch: any;
  constructor(private userdata:UserDataService) {
    this.userdata.getUser().subscribe(data => { 
      console.log("data", data)
      this.userFetch=data
    }
      );
   }

  ngOnInit(): void {
  }

}
