/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import {
	Component,
	Input,
	HostBinding,
	ChangeDetectionStrategy,
	OnInit,
	Self,
	SimpleChanges,
	OnChanges,
	OnDestroy,
	TemplateRef,
	ViewChild,
	ElementRef,
	Renderer2,
} from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { AccordionOpenService } from './accordion-open.service';
import { accordionAnimations } from './animations';
import { Accordion, IAccordionStyling, IAccordionItemStyling, IToggler, AccordionItemInternal, AccordionInternal, pluckIToggler, pluckOpenTogglesIdsToStr } from './settings/';

@Component({
	selector: 'ngxd-accordion',
	exportAs: 'ngxdAccordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
	animations: [accordionAnimations.accordItemsIn, accordionAnimations.spinnerIn],
	viewProviders: [AccordionOpenService],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnInit, OnChanges, OnDestroy {
	static idx = 0;
	@ViewChild('defloadingTpl', { read: TemplateRef, static: true }) private defloadingTpl!: TemplateRef<Element>;
	@HostBinding('attr.data-items-opened') _openedItems: string;
	@HostBinding('attr.id') get id() {
		return `${this.attributes.id}`;
	}
	@HostBinding('attr.name') get name() {
		return this.attributes.name;
	}
	@Input() set accordionList(acc: Accordion) {
		let [name, id] = [(!!acc && !!acc['name']?.length && acc.name) || 'Sample-Accordion', (!!acc && !!acc['id'] && acc.id) || `accordion_${++AccordionComponent.idx}`];
		this._accord = Object.assign(
			{ id, name },
			{
				items: acc?.items.map(
					(item, i) =>
						<AccordionItemInternal>{
							...item,
							id: !!item.id && typeof item.id === 'string' ? item.id : `${id}__accord-item_${i}`,
							itemId: i,
						}
				),
			}
		) as AccordionInternal;
	}
	get accordionItems(): AccordionItemInternal[] {
		return this._accord?.items;
	}
	@Input() openSign: string;
	@Input() closeSign: string;
	@Input() listLogo: string;
	@Input() accordionStyling: IAccordionStyling = {
		numberedItems: false,
		isMultiShow: false,
		bodyDblclkCloseItems: false,
		maxWidth: '100%',
		itemsGuts: '1rem',
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
		this._loadingTpl = val || this.defloadingTpl;
	}
	get loadingTpl(): TemplateRef<Element> {
		return this._loadingTpl ?? this.defloadingTpl;
	}
	private _loadingTpl: TemplateRef<Element>;
	private _accord: AccordionInternal;
	_bodyDblclkClose = false;
	private multiSelect = false;
	_itemStyle: IAccordionItemStyling;
	_isNumbered = false;

	constructor(@Self() private itemsOpenSvc: AccordionOpenService, private hostEl: ElementRef<Element>, private renderer: Renderer2) {}

	ngOnInit() {
		this._bodyDblclkClose = !!this.accordionStyling.bodyDblclkCloseItems ?? false;
		this.multiSelect = !!this.accordionStyling.isMultiShow ?? false;
		this.itemsOpenSvc.itemsOpen$
			.pipe(
				filter((val) => !!val?.length),
				map(pluckOpenTogglesIdsToStr)
			)
			.subscribe((ids) => (this._openedItems = ids));

		this._isNumbered = this.accordionStyling.numberedItems ?? false;
		this._bodyDblclkClose = this.accordionStyling.bodyDblclkCloseItems ?? false;

		let itemStyles: IAccordionItemStyling = Array.isArray(this.accordionStyling.itemStyling)
			? this.accordionStyling.itemStyling.reduce((accu = {}, curr) => ({ ...accu, ...curr }))
			: { ...this.accordionStyling.itemStyling };

		const itemsGuts = this.accordionStyling.itemsGuts ?? 0;
		itemStyles = {
			padding: '0',
			marginBottom: itemsGuts,
			marginTop: itemsGuts,
			...itemStyles,
		};
		this._itemStyle = Object.entries(itemStyles)
			.map(([key, val]) => ({
				[key]: typeof val === 'number' ? `${val}px` : val,
			}))
			.reduce((accu, val) => ({ ...accu, ...val }));

		const accordEl = this.hostEl.nativeElement;
		this.renderer.setStyle(accordEl, 'max-width', this.accordionStyling.maxWidth ?? '100%');
		this.renderer.setStyle(accordEl, 'margin', this.accordionStyling.margin ?? '0');
	}

	ngOnChanges(changes: SimpleChanges) {
		Object.keys(changes).forEach((prop) => {
			if (prop === 'accordionList' && changes[prop].previousValue !== changes[prop].currentValue) this.itemsOpenSvc.setItemsOpen(this.accordionItems?.map(pluckIToggler));
		});
	}

	ngOnDestroy() {
		this.itemsOpenSvc.close();
	}

	onItemToggled = ({ itemId, isOpen }: IToggler = { itemId: 0, isOpen: false }) =>
		this.itemsOpenSvc.setItemsOpen(
			this.itemsOpenSvc.itemsOpenSnapshot.map(
				({ itemId: eId, isOpen: opened }) =>
					(eId === +itemId
						? { itemId, isOpen }
						: {
								itemId: eId,
								isOpen: this.multiSelect ? opened : false,
						  }) as IToggler
			)
		);

	public closeAll = () => this.accordionItems?.forEach(({ itemId, ...rest }) => this.onItemToggled({ itemId, isOpen: false }));

	public trackByFn = (_ind: number, { itemId, ...rest }: any) => +itemId;

	private get attributes(): Partial<Accordion> {
		const { id, name } = this._accord;
		return { id, name };
	}
}
