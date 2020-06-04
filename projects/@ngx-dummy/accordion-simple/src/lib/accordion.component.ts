import { Component, Input, HostBinding, ChangeDetectionStrategy, OnInit, AfterContentChecked, QueryList, ViewChildren } from '@angular/core';
import { Accordion, AccordionItems, IAccordionStyling, IAccordionItemStyling, IToggleer, AccordionItem } from './settings/';
import { AccordionOpenService } from './accordion-open.service';
import { clone } from 'lodash';

let idx = 0;
const l = console.log;

@Component({
	selector: 'ngxd-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	providers: [AccordionOpenService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {
	@HostBinding('attr.data-item-opened') openedItem = null;
	@HostBinding('attr.id') get id() { return `accordion_${this.attributes.id}`; }
	@HostBinding('attr.name') get name() { return this.attributes.name; }
	@Input('accordionList')
	set accordionList(acc: Accordion) {
		this._accord = Object.assign(
			{} as AccordionItems,
			{
				items: acc.items.map((item, i) => (item.id ? { ...item } : { ...item, id: i })),
				name: acc['name'] ?? 'Sample accordion',
				id: (acc['id'] ?? `acc_${idx}`)
			}
		);
	}
	get accordionList(): Accordion {
		return this._accord;
	}
	@Input() openSign = null;
	@Input() closeSign = null;
	@Input() listLogo = null;
	@Input() accordionStyling: IAccordionStyling = {
		numberdItems: false,
		bodyDbclkcloseItems: false,
		maxWidth: '100%',
		itemsGutts: '1rem',
		margin: '0',
		itemStyling: {
			headBgColor: '#4197b2',
			headColor: '#fff',
			bodyBgColor: '#fff',
			bodyColor: '#000',
			margin: '0',
			padding: '0',
		},
	};
	private _accord: Accordion = null;
	items: AccordionItem[] = null;
	bodyDblckcClose = false;
	multiSelect = false;
	itemStyle: IAccordionItemStyling;
	isNumbered = false;

	constructor(private itemsopenSvc: AccordionOpenService) { }

	ngOnInit() {
		this.items = clone(this._accord.items);
		this.bodyDblckcClose = this.accordionStyling.bodyDbclkcloseItems ?? false;
		this.multiSelect = this.accordionStyling.isMultiShow ?? false;
	}

	onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
		this.openedItem = isOpen ? itemId : null;
		this.items = this.items.map((item) => ((item.id === +itemId) ? { ...item, isOpen } : { ...item, isOpen: (this.multiSelect) ? item.isOpen : false })) ?? [];
		// this.itemsopenSvc.setItemsOpen({ itemId, isOpen });
		this.itemsopenSvc.setItemsOpen(this.items.map(item => ({ itemId: item.id, isOpen: item.isOpen } as IToggleer)));
	}

	trackByFn(ind, item) {
		return item.id;
	}

	private get attributes(): Partial<Accordion> {
		const { id, name } = this.accordionList && 'name' in this.accordionList && 'id' in this.accordionList ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
		return { id, name };
	}

}