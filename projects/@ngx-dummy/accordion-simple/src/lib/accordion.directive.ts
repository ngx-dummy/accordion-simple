import { Directive, ElementRef } from '@angular/core';

const l = console.log;

@Directive({
  selector: '[ngxdAccordion]'
})
export class AccordionDirective {

  constructor(private el: ElementRef<HTMLElement>) { }

}
