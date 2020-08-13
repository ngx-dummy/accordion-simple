import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { AccordionItemInternal, getItemCtx, getItemBodyTemplate } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	getItemCtx = getItemCtx;
	getItemBodyTemplate = getItemBodyTemplate;
	isOpen$ = of(false);
	item: Partial<AccordionItemInternal> = null;
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;
}
