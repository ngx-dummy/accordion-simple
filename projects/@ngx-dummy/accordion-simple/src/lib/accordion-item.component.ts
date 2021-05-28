/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { accordionItemAnimations } from './animations';
import { AccordionItemInternal, getItemBodyCtx, getItemBodyTemplate } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	animations: [accordionItemAnimations.accordionItemBodyHeightCollapse],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
	getItemBodyCtx = getItemBodyCtx;
	getItemBodyTemplate = getItemBodyTemplate;
	isOpen$ = of(false);
	item: Partial<AccordionItemInternal> = null;
	startAnim = null;
	doneAnim = null;
}
