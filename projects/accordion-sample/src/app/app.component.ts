import { Component } from '@angular/core';
import { MDCRipple } from '@material/ripple';

import { IAccordionStyling } from '@ngx-dummy/accordion-simple/index';
import { dummyAccordionList1, dummyAccordionList2 } from './helpers/dummy-data';


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
			margin: 0
		}
	};

}
