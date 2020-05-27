import { AccordionItemDirective } from './accordion-item.directive';
import { ElementRef } from '@angular/core';

describe('AccordionItemDirective', () => {
  let testEl: HTMLElement;
  let elRef: ElementRef<HTMLElement>;
  beforeEach(() => {
    testEl = new HTMLElement();
    testEl.setAttribute('ngxdAccordionItem', null);
    elRef = new ElementRef(testEl);
  });

  it('should create an instance', () => {
    const directive = new AccordionItemDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
