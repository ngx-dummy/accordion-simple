import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxdAccordionItem]',
  host: {
    '(click)': 'handleClick()'
  }
})
export class AccordionItemDirective {

  constructor() { }

  handleClick() {
    console.log('DIRECTIVE clicked !!!');
  }

}
