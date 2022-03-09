import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-new',
  templateUrl: './test-new.component.html',
  styleUrls: ['./test-new.component.css']
})
export class TestNewComponent implements OnInit {

  constructor() { }
  @Input() item:any=[];
  ngOnInit(): void {
  }

}
