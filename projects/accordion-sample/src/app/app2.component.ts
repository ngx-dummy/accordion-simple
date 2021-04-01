/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { Component } from '@angular/core';

import {
	Accordion,
	IAccordionStyling,
} from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList2, dummyAccordionList1 } from './helpers/dummy-data';
import { AppComponent } from './app.component';

@Component({
	selector: 'app-root2',
	template: `
		<div class="mdc-layout-grid mdc-layout-grid--align-center">
			<div class="mdc-layout-grid__inner mb-1">
				<div
					class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-center"
				>
					<h2 class="text-center">{{ title }}</h2>
				</div>
			</div>
			<div class="mdc-layout-grid__inner mb-1">
				<div
					class="mdc-layout-grid__cell mdc-layout-grid__cell--align-center mdc-layout-grid__cell--span-12"
				>
					<ngxd-accordion
						[accordionList]="accordList1$ | async"
						[accordionStyling]="styling"
						openSign="plus1.png"
						minus="min.png"
					></ngxd-accordion>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
})
export class App2Component extends AppComponent {
	title = 'Yet another Accordion Sample';
	accordList1$: Promise<Accordion> = new Promise((resolve) =>
		resolve({
			...dummyAccordionList2,
			items: [...dummyAccordionList1.items, ...dummyAccordionList2.items],
		})
	);

	// colors = ['red', 'blue', 'yellow', 'pink'];
	// randColor$ = interval(2000).pipe(
	// 	map(_ => Math.floor(Math.random() * this.colors.length)),
	// 	tap(ind => console.log("Index ", ind)),
	// 	map(ind => this.colors[ind] || "#ccc"),
	// 	tap(val => console.log("Selected color ::: ", val))
	// );

	styling: IAccordionStyling = {
		...super.styling,
		bodyDblclkCloseItems: true,
		itemStyling: {
			headBgColor: 'grey',
			padding: 1,
			headColor: 'lightgreen',
		},
	};
}
