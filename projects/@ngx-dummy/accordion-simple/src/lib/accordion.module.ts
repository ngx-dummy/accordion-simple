import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionDirective } from './accordion.directive';

@NgModule({
	imports: [CommonModule, BrowserAnimationsModule],
	declarations: [AccordionComponent, AccordionItemComponent, AccordionDirective, AccordionItemDirective],
	exports: [AccordionComponent]
})
export class AccordionModule { }
