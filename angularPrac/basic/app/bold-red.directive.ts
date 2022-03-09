import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoldRed]'
})
export class BoldRedDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.fontWeight="bold"
  }

}
