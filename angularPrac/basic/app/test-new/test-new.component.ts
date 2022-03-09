import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-new',
  templateUrl: './test-new.component.html',
  styleUrls: ['./test-new.component.css']
})
export class TestNewComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  item:any=[];
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(JSON.parse(params.item) ); 
      this.item=JSON.parse(params.item)
    }
  );
  }

}
