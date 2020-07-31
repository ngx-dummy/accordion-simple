import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { MDCRipple } from '@material/ripple';

import { IAccordionStyling, Accordion } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList1 as list1, dummyAccordionList2 } from './helpers/dummy-data';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
	selector: 'app-root',
	animations: [
		trigger('moveIn', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateY(-3rem)' }),
				animate('1s ease-in-out', keyframes([
					style({ offset: .2, opacity: .1, transform: 'translateY(-1rem)' }),
					style({ offset: .6, opacity: .4, transform: 'translateY(-0.1rem)' }),
					style({ offset: 1, opacity: 1, transform: 'none' })
				])
				)
			])
		])
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild('simpleBodyTmpl', { static: true }) simpleBodyTmpl: TemplateRef<HTMLElement>;
	title = 'Accordion Sample';
	accordList1: Accordion = null;
	accordList$ = of(dummyAccordionList2).pipe(delay(3000));

	ngOnInit() {
		this.accordList1 = {
			...list1,
			items: [
				...list1.items.map(item => item.title.includes('Accordion Card 2') ? ({ ...item, body: { itemTemplate: this.simpleBodyTmpl, itemBody: <string>item.body } }) : item)
			]
		};
	}

	ngAfterViewInit() {
		const btnRipple = document.querySelector('.mdc-button');
		const ripple = new MDCRipple(btnRipple);
		return () => ripple.destroy();
	}

	styling: IAccordionStyling = {
		itemsGutts: '.1rem',
		maxWidth: '99%',
		margin: '.1rem',
		numberdItems: true,
		itemStyling: {
			headBgColor: '#89a',
			headColor: '#fff',
			margin: '.1rem',
			bodyPadding: '1rem',
			bodyMargin: 1
		}
	};

	styling1: IAccordionStyling = {
		...this.styling,
		itemsGutts: 0,
		numberdItems: false,
		margin: '0 auto',
		isMultiShow: true,
		maxWidth: '94%',
		bodyDbclkcloseItems: true,

		itemStyling: {
			...this.styling.itemStyling,
			headBgColor: 'darkcyan',
			headColor: 'yellow',
			bodyColor: '#aaffff',
			bodyBgColor: '#87a3d1',
			font: 'Comic Sans MS',
			bodyPadding: 1,
			bodyMargin: 0,
			bodyTextAlign: 'left',
			margin: 0
		}
	};

};
