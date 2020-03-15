import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent, AccordionItemComponent } from './accordion/cmps/';

@NgModule({
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionItemComponent],
  declarations: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule { }
