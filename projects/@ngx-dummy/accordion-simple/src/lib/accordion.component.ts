import { Component, Input, HostBinding } from '@angular/core';
import { Accordion, AccordionItems, IAccordionStyling, IAccordionItemStyling, IToggleer } from './settings/';

let idx = 0;

@Component({
	selector: 'ngxd-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
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
	bodyDblckcClose = false;
	itemStyle: IAccordionItemStyling;
	private _accord: Accordion = null;
	isNumbered = false;

	onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
		this.openedItem = isOpen ? itemId : null;
		this.accordionList.items = this.accordionList.items.map((item) => (item.id === +itemId ? { ...item, isOpen } : { ...item, isOpen: false })) ?? [];
	}

	private get attributes(): Partial<Accordion> {
		const { id, name } = this.accordionList && 'name' in this.accordionList && 'id' in this.accordionList ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
		return { id, name };
	}

}
