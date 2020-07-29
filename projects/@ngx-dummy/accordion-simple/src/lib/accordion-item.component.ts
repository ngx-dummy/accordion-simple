import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AccordionItemInternal, getItemCtx, getItemTemplate } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	isOpen$: Observable<boolean> = of(false);
	item: Partial<AccordionItemInternal> = { title: 'Test Item', body: 'Some body text...' };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

	getItemCtx = getItemCtx;
	getItemTemplate = getItemTemplate;

}
