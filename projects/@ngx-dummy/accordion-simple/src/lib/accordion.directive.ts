/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { IAccordionItemStyling } from './settings/';

@Directive({
	selector: '[ngxdAccordion]'
})
export class AccordionDirective implements OnInit, AfterViewInit {

	constructor(
		@Inject(ElementRef) private hostEl: ElementRef<HTMLElement>,
		@Inject(AccordionComponent) private accordCmp: AccordionComponent,
		private render: Renderer2
	) { }

	ngOnInit() {
		this.accordCmp.isNumbered = this.accordCmp.accordionStyling.numberedItems ?? false;
		this.accordCmp.bodyDblclkClose = this.accordCmp.accordionStyling.bodyDblclkCloseItems ?? false;

		let itemStyles: IAccordionItemStyling = Array.isArray(this.accordCmp.accordionStyling.itemStyling) ?
			this.accordCmp.accordionStyling.itemStyling.reduce((accu = {}, curr) => ({ ...accu, ...curr }))
			: { ...this.accordCmp.accordionStyling.itemStyling };

		const itemsGuts = this.accordCmp.accordionStyling.itemsGuts ?? 0;
		itemStyles = {
			padding: '0',
			marginBottom: itemsGuts,
			marginTop: itemsGuts,
			...itemStyles,
		};
		this.accordCmp.itemStyle = Object.entries(itemStyles)
			.map(([key, val]) => ({ [key]: (typeof val === 'number') ? `${val}px` : val }))
			.reduce((accu, val) => ({ ...accu, ...val }));
	}

	ngAfterViewInit() {
		const accordEl = this.hostEl.nativeElement;
		this.render.setStyle(accordEl, 'max-width', this.accordCmp.accordionStyling.maxWidth ?? '100%');
		this.render.setStyle(accordEl, 'margin', this.accordCmp.accordionStyling.margin ?? '0');
	}
}
