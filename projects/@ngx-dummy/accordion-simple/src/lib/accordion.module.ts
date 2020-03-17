import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule { }
