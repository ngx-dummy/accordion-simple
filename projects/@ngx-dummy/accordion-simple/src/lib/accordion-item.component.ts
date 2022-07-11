/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { accordionItemAnimations, NgAnimationEvent } from './animations';
import { AccordionItemInternal, getItemBodyCtx, getItemBodyTemplate } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	animations: [accordionItemAnimations.accordionItemBodyHeightCollapse],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
	getItemBodyCtx = getItemBodyCtx!;
	getItemBodyTemplate = getItemBodyTemplate!;
	isOpen$ = of(false);
	item: Partial<AccordionItemInternal>;

	startAnim(e: NgAnimationEvent) {
		(<HTMLElement>e.element).style.willChange = 'height, opacity, visibility';
		const classes = <DOMTokenList>e.element.classList;
		if (e.fromState === 'void') {
			classes?.add('closed');
		}
		if (e.fromState === 'closed' && e.toState === 'opened') {
			classes.replace('closed', 'opened');
		}
	}

	doneAnim(e: NgAnimationEvent) {
		(<HTMLElement>e.element).style.willChange = 'auto';
		const classes = <DOMTokenList>e.element.classList;
		if (e.fromState == 'opened' && e.toState == 'closed') {
			classes.replace('opened', 'closed');
		}
	}
}
