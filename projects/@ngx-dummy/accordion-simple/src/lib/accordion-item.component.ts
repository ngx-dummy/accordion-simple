import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isEqual } from 'lodash';

import { arrow_down } from './theming/arrow_down';
import { AccordionItem, pngBase64ToBlob } from './settings/';
import { logo as baseLogo } from './theming/iconsbase64';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	item: Partial<AccordionItem> = { isOpen: false, title: 'Test Item', body: 'Some (lorem ipsum) body text...', itemNum: 0 };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

	constructor() {}
}
