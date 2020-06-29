import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItemInternal } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	isOpen$: Observable<boolean>;
	item: Partial<AccordionItemInternal> = { title: 'Test Item', body: 'Some body text...' };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

}
