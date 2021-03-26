import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDataLoad]'
})
export class DataLoadDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
