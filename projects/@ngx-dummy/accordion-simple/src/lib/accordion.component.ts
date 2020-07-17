import { Component, Input, HostBinding, ChangeDetectionStrategy, OnInit, Self, SimpleChanges, OnChanges } from '@angular/core';

import { Accordion, IAccordionStyling, IAccordionItemStyling, IToggleer, AccordionItemInternal, AccordionInternal, pluckIToggler } from './settings/';
import { AccordionOpenService } from './accordion-open.service';
import { accorAnims } from './animations';

let idx = 0;
const l = console.log;

@Component({
	selector: 'ngxd-accordion',
	exportAs: 'ngxdAccordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	animations: [...accorAnims],
	viewProviders: [AccordionOpenService],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit, OnChanges {
	@HostBinding('attr.data-item-opened') openedItem = null;
	@HostBinding('attr.id') get id() { return `accordion_${this.attributes.id}`; }
	@HostBinding('attr.name') get name() { return this.attributes.name; }
	@Input('accordionList')
	set accordionList(acc: Accordion) {
		this._accord = Object.assign(
			{},
			{
				items: acc?.items?.map((item, i) => ({ ...item, isOpen: false, itemId: i } as AccordionItemInternal)),
				name: (acc && acc['name']) ?? 'Sample accordion',
				id: (acc && acc['id']) ?? `accordion_${idx}`
			}
		) as AccordionInternal;
	}
	get accordionItems(): AccordionItemInternal[] {
		return this._accord.items;
	}
	@Input() openSign = null;
	@Input() closeSign = null;
	@Input() listLogo = null;
	@Input() accordionStyling: IAccordionStyling = {
		numberdItems: false,
		isMultiShow: false,
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
	private _accord: AccordionInternal = null;
	bodyDblckcClose = false;
	multiSelect = false;
	itemStyle: IAccordionItemStyling = null;
	isNumbered = false;

	constructor(@Self() private itemsopenSvc: AccordionOpenService) { }

	ngOnInit() {
		this.bodyDblckcClose = !!this.accordionStyling.bodyDbclkcloseItems ?? false;
		this.multiSelect = !!this.accordionStyling.isMultiShow ?? false;
	}

	ngOnChanges(changes: SimpleChanges) {
		for (let c in changes) {
			if (c === 'accordionList') {
				this.itemsopenSvc.setItemsOpen(this._accord?.items?.map(pluckIToggler));
			}
		}
	}

	onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
		this.openedItem = isOpen ? itemId : null;
		this.itemsopenSvc.setItemsOpen(
			this.itemsopenSvc.itemsOpenSnapshot
				.map(item => ((item.itemId === +itemId) ? { itemId: item.itemId, isOpen } : { itemId: item.itemId, isOpen: (this.multiSelect) ? !!item.isOpen : false }) as IToggleer)
		);
	}

	public closeAll = () => this._accord.items?.forEach(item => this.onItemToggled({ itemId: item?.itemId, isOpen: false }));

	public trackByFn = (ind, item) => item?.itemId;

	private get attributes(): Partial<Accordion> {
		const { id, name } = this._accord && 'name' in this._accord && 'id' in this._accord ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
		return { id, name };
	}

}