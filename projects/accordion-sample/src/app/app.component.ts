/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { Component, ViewChild, TemplateRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { MDCRipple } from '@material/ripple';

import { IAccordionStyling, Accordion } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList1 as list1, dummyAccordionList2 } from './helpers/dummy-data';
import { loaderIn } from './loader.anim';

@Component({
	selector: 'app-root',
	animations: [loaderIn],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild('simpleBodyTmpl', { static: true }) simpleBodyTmpl: TemplateRef<HTMLElement>;
	@ViewChild('tmpl2', { static: true }) tmpl2: TemplateRef<HTMLElement>;
	title = 'Accordion Sample';
	accordList2: Accordion = null;
	accordList$ = of(dummyAccordionList2).pipe(delay(3000));

	styling: IAccordionStyling = {
		itemsGuts: '.1rem',
		maxWidth: '99%',
		margin: '.1rem',
		numberedItems: true,
		itemStyling: {
			headBgColor: '#89a',
			headColor: '#fff',
			margin: '.1rem',
			bodyPadding: '1rem',
			bodyMargin: 1,
		},
	};

	styling1: IAccordionStyling = {
		...this.styling,
		itemsGuts: 0,
		numberedItems: false,
		margin: '0 auto',
		isMultiShow: true,
		maxWidth: '94%',
		bodyDblclkCloseItems: true,

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
			margin: 0,
		},
	};

	ngOnInit() {
		this.accordList2 = {
			...list1,
			items: [
				...list1.items
					.map((item) =>
						item.title.includes('Accordion Card 2')
							? {
									...item,
									body: {
										itemTemplate: this.simpleBodyTmpl,
										itemBody: item.body,
									},
							  }
							: { ...item }
					)
					.map((item) =>
						item.title.includes('Accordion Card 1')
							? {
									...item,
									body: {
										itemTemplate: this.tmpl2,
										itemBody: 'Lorem ipsum card ...',
									},
							  }
							: { ...item }
					),
			],
		};
	}

	ngAfterViewInit() {
		const btnRipple = document.querySelector('.mdc-button');
		const ripple = new MDCRipple(btnRipple);
		return () => ripple.destroy();
	}
}
