import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { AccordionItemInternal, getItemBodyCtx, getItemBodyTemplate } from './settings/';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	getItemBodyCtx = getItemBodyCtx;
	getItemBodyTemplate = getItemBodyTemplate;
	isOpen$ = of(false);
	item: Partial<AccordionItemInternal> = null;
}
