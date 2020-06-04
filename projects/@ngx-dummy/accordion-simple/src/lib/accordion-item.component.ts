import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { map } from "rxjs/operators";

import { AccordionItem } from './settings/';
import { Observable } from 'rxjs';

@Component({
	selector: 'ngxd-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent {
	isOpen = false;
	isOpen$: Observable<boolean>;
	item: Partial<AccordionItem> = { title: 'Test Item', body: 'Some body text...', id: 0 };
	logo = null;
	isImgOpen = false;
	openSign = null;
	closeSign = null;

}
