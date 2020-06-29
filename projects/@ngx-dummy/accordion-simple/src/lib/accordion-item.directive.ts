import { Directive, ElementRef, Output, EventEmitter, AfterViewInit, Input, Renderer2, Inject, OnInit, Host } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { filter, concatMap, tap, pluck } from 'rxjs/operators';
import { of } from 'rxjs';

import { IToggleer, IAccordionItemStyling, AccordionItem, getPng, getSvg, AccordionItemInternal } from './settings/';
import { AccordionItemComponent } from './accordion-item.component';
import { logo as baseLogo, arrow_down } from './theming/';
import { AccordionOpenService } from './accordion-open.service';

@Directive({
	selector: '[ngxdAccordionItem]',
	host: {
		'[class.opened]': 'isOpen',
		'(dblclick)': 'onDblClick([$event.target, $event.currentTarget])',
		'(click)': 'onClick([$event.target, $event.currentTarget])'
	}
})
export class AccordionItemDirective implements OnInit, AfterViewInit {
	isOpen = false;
	@Input('ngxdAccordionItem')
	set item(val) {
		if (!val || typeof val === 'undefined') throw new Error('Proper Item of type <IAccordionItem> should be provided.. ');
		this._item = val;
	}
	get item() {
		return this._item;
	}
	@Input('logo')
	set logo(img: string) {
		if (this._logo && !!this._logo.length) return;
		this._logo = img && !!img.length ? img : this._baseLogoImg;
	}
	get logo() {
		return this._logo;
	}
	@Input('styling') itemStyles: IAccordionItemStyling = {
		headHeight: '50px',
		headBgColor: '#ccc',
		headColor: '#fff',
		bodyBgColor: '#fff',
		bodyColor: '#000',
		fontSize: '10px',
		bodyPadding: '0',
	};
	@Input() bodyDblckcClose = false;
	@Input() openSign = null;
	@Input() closeSign = null;
	@Input() isNumbered = false;
	@Output() toggled: EventEmitter<IToggleer> = new EventEmitter();
	private _logo = null;
	private _item: AccordionItemInternal;
	private _baseLogoImg = getPng(baseLogo, this.sanitaizer);
	private _basePlusImg = getSvg(arrow_down, this.sanitaizer);

	constructor(
		@Inject(AccordionItemComponent) private hostCmp: AccordionItemComponent,
		@Inject(ElementRef) private hostElRef: ElementRef<HTMLElement>,
		@Host() private itemStatusSvc: AccordionOpenService,
		private render: Renderer2,
		private sanitaizer: DomSanitizer
	) { }

	ngOnInit() {
		this._item = {
			...this._item,
			itemNum: (this.isNumbered) ? this._item.id + 1 : null
		};
		this.hostCmp.item = { ...this._item } as Partial<AccordionItem>;
		this.hostCmp.closeSign = this.closeSign;
		this.hostCmp.openSign = this.openSign;
		this.hostCmp.logo = this.logo;
		this.hostCmp.isImgOpen = this.isImgOpen;

		this.hostCmp.isOpen$ = this.itemStatusSvc.itemOpen$.pipe(
			filter(val => !!val),
			concatMap(toggles => of(toggles.find(t => t.itemId == this._item.itemId))),
			pluck('isOpen'),
			tap(isOpen => this.isOpen = isOpen)
		);
	}

	ngAfterViewInit() {
		const nativeEl = this.hostElRef.nativeElement;
		const itemEl = nativeEl.getElementsByClassName('accord-item').item(0) as HTMLElement;
		const headEl = nativeEl.getElementsByClassName('accord-item__header').item(0) as HTMLElement;
		const bodyEl = nativeEl.getElementsByClassName('accord-item__body').item(0) as HTMLElement;

		this.render.setStyle(itemEl, 'margin', this.itemStyles.margin ?? '0');
		this.render.setStyle(itemEl, 'padding', this.itemStyles.padding ?? '0');
		this.itemStyles.font && this.render.setStyle(itemEl, 'font', this.itemStyles.font);
		this.itemStyles.fontSize && this.render.setStyle(itemEl, 'font-size', this.itemStyles.fontSize);
		this.itemStyles.fontStyle && this.render.setStyle(itemEl, 'font-style', this.itemStyles.fontStyle);
		this.itemStyles.fontFamily && this.render.setStyle(itemEl, 'font-family', this.itemStyles.fontFamily);
		this.render.setStyle(itemEl, 'margin-bottom', this.itemStyles.marginBottom);
		this.render.setStyle(itemEl, 'margin-top', this.itemStyles.marginTop);


		this.render.setStyle(headEl, 'background-color', this.itemStyles.headBgColor ?? '#ccc');
		this.itemStyles.headHeight && this.render.setStyle(headEl, 'height', this.itemStyles.headHeight);
		this.itemStyles.headFont && this.render.setStyle(headEl, 'font', this.itemStyles.headFont);
		this.render.setStyle(headEl, 'font-size', this.itemStyles.headFontSize ?? '1.1rem');
		this.render.setStyle(headEl, 'color', this.itemStyles.headColor ?? '#ccc');

		this.render.setStyle(bodyEl, 'background-color', this.itemStyles.bodyBgColor ?? 'rgba(200, 200, 200, 0.2)');
		this.render.setStyle(bodyEl, 'color', this.itemStyles.bodyColor ?? '#000');
		this.render.setStyle(bodyEl, 'padding', this.itemStyles.bodyPadding ?? '.1rem');
		this.render.setStyle(bodyEl, 'margin', this.itemStyles.bodyMargin ?? '0');
		this.itemStyles.bodyFont && this.render.setStyle(bodyEl, 'font', this.itemStyles.bodyFont);
		this.render.setStyle(bodyEl, 'font-size', this.itemStyles.bodyFontSize ?? '1rem');
		this.itemStyles.bodyTextAlign && this.render.setStyle(bodyEl, 'text-align', this.itemStyles.bodyTextAlign);
		this.bodyDblckcClose && this.render.setStyle(bodyEl, 'cursor', 'grab');
		// this.render.setStyle(bodyEl, '')
	}

	onClick([{ outerHTML }, { dataset }]) {
		if (outerHTML.indexOf('header') > -1) {
			this.handleClick({ dataset });
		}
	}

	onDblClick([{ outerHTML }, { dataset }]) {
		if (this.bodyDblckcClose && outerHTML.indexOf('accord-item__body') > -1) {
			this.handleClick({ dataset });
		}
	}

	private handleClick = ({ dataset }) => {
		const { idx } = dataset;
		this.toggle(+idx);
	};

	private toggle = (itemId = 0) => this.toggled.emit({ itemId, isOpen: !this.isOpen });

	private get isImgOpen() {
		const imgOpen = this.closeSign && !!this.closeSign.length && this.openSign && !!(<string>this.openSign).length;
		if (!imgOpen) {
			this.openSign = this._basePlusImg;
			this.hostCmp.openSign = this.openSign;
		}
		return imgOpen;
	}

}
