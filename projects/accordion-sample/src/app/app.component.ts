import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { MDCRipple } from '@material/ripple';

import { IAccordionStyling, Accordion } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList1, dummyAccordionList2 } from './helpers/dummy-data';

@Component({
	selector: 'app-root',
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
			...dummyAccordionList1,
			items: [...dummyAccordionList1.items.map(item => item.title.includes('Accordion Card 2') ? ({ ...item, body: { itemTemplate: this.simpleBodyTmpl, itemBody: <string>item.body } }) : item)]
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
