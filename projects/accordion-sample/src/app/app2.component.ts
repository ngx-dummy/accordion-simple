/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { Component } from '@angular/core';

import { IAccordionStyling } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList2, dummyAccordionList1 } from './helpers/dummy-data';
import { AppComponent } from './app.component';

@Component({
	selector: 'app-root2',
	template: `
		<div class="mdc-layout-grid mdc-layout-grid--align-center">
			<div class="mdc-layout-grid__inner mb-1">
				<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-center">
					<h2 class="text-center">{{title}}</h2>
				</div>
			</div>
			<div class="mdc-layout-grid__inner mb-1">
				<div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-center mdc-layout-grid__cell--span-12">
					<ngxd-accordion [accordionList]="accordList1$ | async" [accordionStyling]="styling" openSign="plus1.png" minus="min.png"></ngxd-accordion>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent2 extends AppComponent {
	title = 'Yet another Accordion Sample';
	accordList1$ = new Promise(resolve => ( resolve({ ...dummyAccordionList2, items: [...dummyAccordionList1.items, ...dummyAccordionList2.items] })));

	styling: IAccordionStyling = {
		...super.styling,
		bodyDblclkCloseItems: true,
		itemStyling: {
			headBgColor: 'grey',
			padding: 1,
			headColor: 'lightgreen'
		}
	};

}
