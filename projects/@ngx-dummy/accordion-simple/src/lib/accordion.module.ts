/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionDirective } from './accordion.directive';
import { AccordionItemImgDirective } from './accordion-item-img.directive';

@NgModule({
	imports: [BrowserAnimationsModule, HttpClientModule],
	declarations: [AccordionComponent, AccordionItemComponent, AccordionDirective, AccordionItemDirective, AccordionItemImgDirective],
	exports: [AccordionComponent],
})
export class AccordionModule {}
