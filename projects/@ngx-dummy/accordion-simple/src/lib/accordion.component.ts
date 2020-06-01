import { Component, OnInit, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';
import { Accordion, AccordionItems, IAccordionStyling, IAccordionItemStyling, IToggleer } from './settings/';

let idx = 0;

@Component({
	selector: 'ngxd-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
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
	itemStyle: IAccordionItemStyling;
	private _accord: Accordion = null;
	accordEl: HTMLDivElement;
	isNumbered = false;

	constructor(private el: ElementRef<HTMLElement>, private render: Renderer2) { }

	ngOnInit() {
		this.isNumbered = this.accordionStyling.numberdItems;
		this.accordionList.items = this.accordionList.items.map((item, i) => ({ ...item, id: i }));
		let accordHostEl = this.el.nativeElement;

		let itemStyles: IAccordionItemStyling = (Array.isArray(this.accordionStyling.itemStyling)) ?
			this.accordionStyling.itemStyling.reduce((accu = {}, curr) => ({ ...accu, ...curr }))
			: { ...this.accordionStyling.itemStyling };

		const itemsGutts = this.accordionStyling.itemsGutts ;

		itemStyles = {
			padding: '0',
			marginBottom: itemsGutts,
			marginTop: itemsGutts,
			...itemStyles,
		};
		this.itemStyle = itemStyles;
	}

	ngAfterViewInit() {
		this.accordEl = this.el.nativeElement.querySelector('.accordion');
		this.render.setStyle(this.accordEl, 'max-width', this.accordionStyling.maxWidth ?? '100%');
		this.render.setStyle(this.accordEl, 'margin', this.accordionStyling.margin ?? '0');

	}

	onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
		this.openedItem = isOpen ? itemId : null;
		this.accordionList.items = this.accordionList.items.map((item) => (item.id === +itemId ? { ...item, isOpen } : { ...item, isOpen: false })) ?? [];
	}

	private get attributes(): Partial<Accordion> {
		const { id, name } = this.accordionList && 'name' in this.accordionList && 'id' in this.accordionList ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
		return { id, name };
	}

}
