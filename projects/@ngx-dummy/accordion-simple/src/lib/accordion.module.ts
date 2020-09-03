import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionDirective } from './accordion.directive';
import { AccordionItemImgDirective } from './accordion-item-img.directive';

@NgModule({
	imports: [BrowserAnimationsModule, HttpClientModule],
	declarations: [AccordionComponent, AccordionItemComponent, AccordionDirective, AccordionItemDirective, AccordionItemImgDirective],
	exports: [AccordionComponent]
})
export class AccordionModule { }
