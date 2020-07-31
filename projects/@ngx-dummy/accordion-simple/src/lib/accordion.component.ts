import { Component, Input, HostBinding, ChangeDetectionStrategy, OnInit, Self, SimpleChanges, OnChanges, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { AccordionOpenService } from './accordion-open.service';
import { accordionAnims } from './animations';
import {
	Accordion,
	IAccordionStyling,
	IAccordionItemStyling,
	IToggleer,
	AccordionItemInternal,
	AccordionInternal,
	pluckIToggler,
	pluckOpenTogglesIdsToStr
} from './settings/';

let idx = 0;

@Component({
	selector: 'ngxd-accordion',
	exportAs: 'ngxdAccordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	animations: [...accordionAnims],
	viewProviders: [AccordionOpenService],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit, OnChanges, OnDestroy {
	@ViewChild('defloadingTpl', { read: TemplateRef, static: true }) defloadingTpl: TemplateRef<Element>;
	@HostBinding('attr.data-items-opened') private openedItems = undefined;
	@HostBinding('attr.id') private get id() { return `${this.attributes.id}`; }
	@HostBinding('attr.name') private get name() { return this.attributes.name; }
	@Input() set accordionList(acc: Accordion) {
		let [name, id] = [(!!acc && !!acc['name'].length && acc.name) ?? 'Sample-Accordion', (!!acc && !!acc['id'] && acc.id) ?? `accordion_${++idx}`];
		this._accord = Object.assign(
			{ id, name },
			{ items: acc?.items.map((item, i) => (<AccordionItemInternal>{ ...item, id: (!!item.id && typeof item.id === 'string') ? item.id : `${id}__accord-item_${i}`, itemId: i })) }
		) as AccordionInternal;
	}
	get accordionItems(): AccordionItemInternal[] {
		return this._accord?.items;
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
	@Input() set loadingTpl(val: TemplateRef<Element>) {
		if (!!val)
		 this._loadingTpl = val;
		 else
		 this._loadingTpl = this.defloadingTpl;
	}
	get loadingTpl(): TemplateRef<Element> {
		return this._loadingTpl ?? this.defloadingTpl;
	}
	private _loadingTpl: TemplateRef<Element> = null;
	private _accord: AccordionInternal = null;
	bodyDblckcClose = false;
	multiSelect = false;
	itemStyle: IAccordionItemStyling = null;
	isNumbered = false;

	constructor(@Self() private itemsopenSvc: AccordionOpenService) { }

	ngOnInit() {
		this.bodyDblckcClose = !!this.accordionStyling.bodyDbclkcloseItems ?? false;
		this.multiSelect = !!this.accordionStyling.isMultiShow ?? false;
		this.itemsopenSvc.itemsOpen$.pipe(
			filter(val => (!!val && !!val.length)),
			map(pluckOpenTogglesIdsToStr)
		).subscribe(ids => this.openedItems = ids || null);
	}

	ngOnChanges(changes: SimpleChanges) {
		Object.keys(changes).forEach(prop => {
			if (prop === 'accordionList' && changes[prop].previousValue !== changes[prop].currentValue)
				this.itemsopenSvc.setItemsOpen(this.accordionItems?.map(pluckIToggler));
		});
	}

	ngOnDestroy() {
		this.itemsopenSvc.unsubscribe();
	}

	onItemToggled = ({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) =>
		this.itemsopenSvc.setItemsOpen(
			this.itemsopenSvc.itemsOpenSnapshot
				.map(({ itemId: eId, isOpen: opened }) => ((eId === +itemId) ? { itemId, isOpen } : { itemId: eId, isOpen: (this.multiSelect) ? opened : false }) as IToggleer)
		);

	public closeAll = () => this.accordionItems?.forEach(({ itemId, ...rest }) => this.onItemToggled({ itemId, isOpen: false }));

	public trackByFn = (ind, { itemId, ...rest }) => +itemId;

	private get attributes(): Partial<Accordion> {
		const { id, name } = this._accord;
		return { id, name };
	}

}