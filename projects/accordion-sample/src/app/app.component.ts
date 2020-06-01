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
		itemsGutts: '0',
		maxWidth: '99%',
		margin: '.1rem',
		numberdItems: false,

		itemStyling: {
			headBgColor: 'brown',
			headColor: 'gold',
			margin: '.1rem',
			bodyPadding: '.1rem',
			bodyMargin: '0',

		},
	};



	styling1: IAccordionStyling = {
		...this.styling,
		itemsGutts: '1rem',
		numberdItems: true,
		isMultiShow: true,
		itemStyling: {
			...this.styling.itemStyling,
			headBgColor: 'darkcyan',
			headColor: 'white',
			bodyColor: '#aaffff',
			bodyBgColor: '#87a3d1',
			font: '1.8rem Comic Sans MS'
		}
	};

}
