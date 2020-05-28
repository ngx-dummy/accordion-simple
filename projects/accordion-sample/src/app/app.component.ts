import { Component } from '@angular/core';
import { IAccordionStyling } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList1, dummyAccordionList2 } from './helpers/dummy-data';

import { MDCRipple } from '@material/ripple';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Accordion Sample';
	accordList1 = dummyAccordionList1;
	accordList2 = dummyAccordionList2;

	ngAfterViewInit() {
		let btnRipple: HTMLButtonElement = document.querySelector('.mdc-button');
		btnRipple.style.width = '100%';
		btnRipple.style.display = 'flex';
		let ripple = new MDCRipple(btnRipple);
	}

	styling: IAccordionStyling = {
		itemsGutts: '1px',
		maxWidth: '99%',
		// margin: '1rem',

		itemStyling: {
			headBgColor: '#ccc',
			headColor: 'black',
			// margin: '1px',
			bodyBgColor: '#f9f9f9',
			bodyPadding: '.1rem',
			bodyMargin: '.1rem',
		},
	};
}
