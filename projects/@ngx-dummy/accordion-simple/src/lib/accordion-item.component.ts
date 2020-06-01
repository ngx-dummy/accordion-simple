import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccordionItem } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	item: Partial<AccordionItem> = { isOpen: false, title: 'Test Item', body: 'Some (lorem ipsum) body text...' };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

}
