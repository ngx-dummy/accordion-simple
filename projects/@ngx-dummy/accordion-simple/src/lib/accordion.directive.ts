import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { IAccordionItemStyling } from './settings/';

const l = console.log;

@Directive({
	selector: '[ngxdAccordion]',
})
export class AccordionDirective implements OnInit, AfterViewInit {
	accordEl: HTMLElement;
	
	constructor(private hostEl: ElementRef<HTMLElement>, private render: Renderer2, private accordCmp: AccordionComponent) { }

	ngOnInit() {
		this.accordEl = this.hostEl.nativeElement;
		this.accordCmp.isNumbered = this.accordCmp.accordionStyling.numberdItems;
		this.accordCmp.bodyDblckcClose = this.accordCmp.accordionStyling.bodyDbclkcloseItems ?? false;
		this.accordCmp.accordionList.items = this.accordCmp.accordionList.items.map((item, i) => ({ ...item, id: i }));

		let itemStyles: IAccordionItemStyling = (Array.isArray(this.accordCmp.accordionStyling.itemStyling)) ?
			this.accordCmp.accordionStyling.itemStyling.reduce((accu = {}, curr) => ({ ...accu, ...curr }))
			: { ...this.accordCmp.accordionStyling.itemStyling };

		const itemsGutts = this.accordCmp.accordionStyling.itemsGutts;
		itemStyles = {
			padding: '0',
			marginBottom: itemsGutts,
			marginTop: itemsGutts,
			...itemStyles,
		};
		this.accordCmp.itemStyle = Object.entries(itemStyles)
			.map(([key, val]) => ({ [key]: (typeof val === 'number') ? `${val}px` : val }))
			.reduce((accu, val) => ({ ...accu, ...val }));
	}

	ngAfterViewInit() {
		this.render.setStyle(this.accordEl, 'max-width', this.accordCmp.accordionStyling.maxWidth ?? '100%');
		this.render.setStyle(this.accordEl, 'margin', this.accordCmp.accordionStyling.margin ?? '0');
	}
}
