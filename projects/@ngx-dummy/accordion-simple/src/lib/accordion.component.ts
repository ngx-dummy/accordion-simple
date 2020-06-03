import { Component, Input, HostBinding, ChangeDetectionStrategy, OnInit, AfterContentChecked, QueryList, ViewChildren } from '@angular/core';
import { Accordion, AccordionItems, IAccordionStyling, IAccordionItemStyling, IToggleer, AccordionItem } from './settings/';
import { AccordionItemComponent } from './accordion-item.component';

let idx = 0;
const l = console.log;

@Component({
	selector: 'ngxd-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit, AfterContentChecked {
	@ViewChildren(AccordionItemComponent) accordItemRef: QueryList<AccordionItemComponent>;
	@HostBinding('attr.data-item-opened') openedItem = null;
	@HostBinding('attr.id') get id() { return `accordion_${this.attributes.id}`; }
	@HostBinding('attr.name') get name() { return this.attributes.name; }
	@Input('accordionList')
	set accordionList(acc: Accordion) {
		this._accord = Object.assign({} as AccordionItems, { items: acc.items, name: acc['name'] ?? 'Sample accordion', id: (acc['id'] ?? `acc_${idx}`) });
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
	items: AccordionItem[] = null;
	accordionItemsCmps: AccordionItemComponent[];
	bodyDblckcClose = false;
	itemStyle: IAccordionItemStyling;
	private _accord: Accordion = null;
	isNumbered = false;

	ngOnInit() {
		this.items = this._accord.items;
	}

	ngAfterContentChecked() {

	}

	ngAfterViewInit() {
		this.accordionItemsCmps = Array.from(this.accordItemRef);

	}

	onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
		this.openedItem = isOpen ? itemId : null;
		this.accordionList.items = this.accordionList.items.map((item) => (item.id === +itemId ? { ...item, isOpen } : { ...item, isOpen: false })) ?? [];
		this.accordionItemsCmps.forEach((cmp, i) => {
			if (i == itemId) {
				cmp.isOpen = isOpen;
			} else {
				cmp.isOpen = false;
			}
			return cmp;
		});
	}

	trackByFn(ind, item) {
		return ind;
	}

	private get attributes(): Partial<Accordion> {
		const { id, name } = this.accordionList && 'name' in this.accordionList && 'id' in this.accordionList ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
		return { id, name };
	}

}
1;