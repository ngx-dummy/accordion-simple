import { Directive, ElementRef, Output, EventEmitter, AfterViewInit, Input, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isEqual, clone } from 'lodash';

import { logo as baseLogo } from './theming/iconsbase64';
import { arrow_down } from './theming/arrow_down';
import { IToggleer, IAccordionItemStyling, AccordionItem, pngBase64ToBlob } from './settings/';
import { AccordionItemComponent } from './accordion-item.component';

@Directive({
	selector: '[ngxdAccordionItem]',
	host: {
		'[class.item-opened]': 'hostCmp.item.isOpen',
		'(click)': 'onClick($event.currentTarget)',
	},
})
export class AccordionItemDirective implements AfterViewInit {
	@Input('ngxdAccordionItem')
	set item(val) {
		if (isEqual(val, this._item)) return;
		this._item = val;
	}
	get item() {
		return this._item;
	}
	@Input() headBg = '#ccc';
	@Input('logo')
	set logo(img: string) {
		if (this._logo && !!this._logo.length) return;
		if (this._logo && isEqual(img, this._logo)) return;
		this._logo = img && !!img.length ? img : this.getPng(baseLogo);
	}
	get logo() {
		return this._logo;
	}
	@Input() openSign = null;
	@Input() closeSign = null;
	@Output() toggled: EventEmitter<IToggleer> = new EventEmitter();
	@Input('styling') stylingObj: IAccordionItemStyling = {
		headHeight: '50px',
		headBgColor: '#ccc',
		headColor: '#fff',
		bodyBgColor: '#fff',
		bodyColor: '#000',
		// logo: this.hostCmp.logo,
		bodyPadding: '0',
	};
	_logo = null;
	logoEl: HTMLDivElement;
	titleEl: HTMLDivElement;
	collapseEl: HTMLDivElement;
	private _item: AccordionItem;

	constructor(private hostCmp: AccordionItemComponent, private hostElRef: ElementRef<HTMLElement>, private render: Renderer2, private sanitaizer: DomSanitizer) {}

	ngOnInit() {
		this._item = {
			...this._item,
			itemNum: this._item.id && !isNaN(this._item.id) ? this._item.id + 1 : null,
		};
		this.hostCmp.item = { ...this._item } as Partial<AccordionItem>;
		this.hostCmp.closeSign = this.closeSign;
		this.hostCmp.openSign = clone(this.openSign);
		this.hostCmp.logo = clone(this.logo);
		this.hostCmp.isImgOpen = this.isImgOpen;
	}

	ngAfterViewInit() {
		const nativeEl = this.hostElRef.nativeElement;
		const itemEl: HTMLDivElement = nativeEl.getElementsByClassName('accord-item').item(0) as HTMLDivElement;
		const headEl: HTMLDivElement = nativeEl.getElementsByClassName('accord-item__header').item(0) as HTMLDivElement;
		const bodyEl: HTMLDivElement = nativeEl.getElementsByClassName('accord-item__body').item(0) as HTMLDivElement;

		this.stylingObj?.margin && this.render.setStyle(itemEl, 'margin', this.stylingObj?.margin);
		this.stylingObj?.padding && this.render.setStyle(itemEl, 'padding', this.stylingObj?.padding);
		this.stylingObj?.FontStyles && this.render.setStyle(itemEl, 'font', this.stylingObj.FontStyles);
		this.stylingObj?.marginBottom && this.render.setStyle(itemEl, 'margin-bottom', this.stylingObj.marginBottom || '1rem');

		this.stylingObj?.headHeight && this.render.setStyle(headEl, 'height', this.stylingObj?.headHeight);
		this.stylingObj?.headBgColor && this.render.setStyle(headEl, 'background-color', this.headBg || this.stylingObj?.headBgColor);
		this.stylingObj?.headColor && this.render.setStyle(headEl, 'color', this.stylingObj?.headColor);

		// this.stylingObj?.bodyBgColor && this.render.setStyle(bodyEl, 'transition', 'all .1s ease');
		this.stylingObj?.bodyBgColor && this.render.setStyle(bodyEl, 'background-color', this.stylingObj?.bodyBgColor);
		this.stylingObj?.bodyColor && this.render.setStyle(bodyEl, 'color', this.stylingObj?.bodyColor);
		this.stylingObj?.bodyPadding && this.render.setStyle(bodyEl, 'padding', '1rem');
		this.stylingObj?.bodyMargin && this.render.setStyle(bodyEl, 'margin', this.stylingObj.bodyMargin || '0');
	}

	onClick({ dataset }) {
		const { idx } = dataset;
		this.toggle(+idx);
	}

	toggle(itemId = 0) {
		let isHostOpen = this.hostCmp.item.isOpen;
		let freshIsOpen = !isHostOpen;
		this.hostCmp.item.isOpen = freshIsOpen;
		this.toggled.emit({ itemId, isOpen: freshIsOpen });
	}

	stopclick($event: MouseEvent) {
		!!!$event.defaultPrevented && $event.preventDefault();
		return;
	}

	get isImgOpen() {
		const imgOpen = this.closeSign && !!this.closeSign.length && this.openSign && !!(<string>this.openSign).length;
		if (!imgOpen) {
			this.openSign = this.getSvg(arrow_down);
			this.hostCmp.openSign = this.openSign;
		}
		return imgOpen;
	}

	private getSvg(file: string) {
		return this.sanitazeRes('data:image/svg+xml;base64,' + btoa(file));
	}

	private getPng(file: string) {
		if (this._logo) return this._logo;
		return this.sanitazeRes(URL.createObjectURL(pngBase64ToBlob(file)));
	}

	private sanitazeRes(item: string) {
		return this.sanitaizer.bypassSecurityTrustResourceUrl(item);
	}
}
