/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionItemImgDirective } from './accordion-item-img.directive';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [AccordionComponent, AccordionItemComponent, AccordionItemDirective, AccordionItemImgDirective],
	exports: [AccordionComponent],
})
export class AccordionModule {}
