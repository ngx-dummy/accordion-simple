import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent]
})
export class AccordionModule { }
