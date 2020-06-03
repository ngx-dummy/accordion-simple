import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccordionItem } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	@Input() isOpen = false;
	item: Partial<AccordionItem> = { isOpen: false, title: 'Test Item', body: 'Some body text...' };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

}
