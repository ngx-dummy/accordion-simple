import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDCRipple } from "@material/ripple";

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionDirective } from './accordion.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionItemComponent, AccordionDirective, AccordionItemDirective],
  exports: [AccordionComponent],
  providers: [MDCRipple]
})
export class AccordionModule { }
