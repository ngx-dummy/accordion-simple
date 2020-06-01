import { Directive, ElementRef, Output, EventEmitter, AfterViewInit, Input, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isEqual, clone, isNil } from 'lodash';

import { logo as baseLogo } from './theming/iconsbase64';
import { arrow_down } from './theming/arrow_down';
import { IToggleer, IAccordionItemStyling, AccordionItem, pngBase64ToBlob } from './settings/';
import { AccordionItemComponent } from './accordion-item.component';
import { logo } from './theming/iconsbase64';

const l = console.log;

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
		if (isNil(val)) throw new Error('Proper Item of type <IAccordionItem> should be provided.. ');
		if (isEqual(val, this._item)) return;
		this._item = val;
	}
	get item() {
		return this._item;
	}
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
	@Input() isNumbered = false;
	@Output() toggled: EventEmitter<IToggleer> = new EventEmitter();
	@Input('styling') itemStyles: IAccordionItemStyling = {
		headHeight: '50px',
		headBgColor: '#ccc',
		headColor: '#fff',
		bodyBgColor: '#fff',
		bodyColor: '#000',
		fontSize: '10px',
		bodyPadding: '0',
	};
	_logo = null;
	logoEl: HTMLDivElement;
	titleEl: HTMLDivElement;
	collapseEl: HTMLDivElement;
	private _item: AccordionItem;

	constructor(private hostCmp: AccordionItemComponent, private hostElRef: ElementRef<HTMLElement>, private render: Renderer2, private sanitaizer: DomSanitizer) { }

	ngOnInit() {
		this._item = {
			...this._item,
			itemNum: (this.isNumbered) ? this._item.id + 1 : null
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

		this.render.setStyle(itemEl, 'margin', this.itemStyles.margin ?? '0');
		this.render.setStyle(itemEl, 'padding', this.itemStyles.padding ?? '0');
		this.itemStyles.font && this.render.setStyle(itemEl, 'font', this.itemStyles.font);
		this.itemStyles.fontSize && this.render.setStyle(itemEl, 'font-size', this.itemStyles.fontSize);
		this.render.setStyle(itemEl, 'margin-bottom', this.itemStyles.marginBottom);
		this.render.setStyle(itemEl, 'margin-top', this.itemStyles.marginTop);


		this.render.setStyle(headEl, 'background-color', this.itemStyles.headBgColor ?? '#ccc');
		this.itemStyles.headHeight && this.render.setStyle(headEl, 'height', this.itemStyles.headHeight);
		this.itemStyles.headFont && this.render.setStyle(headEl, 'font', this.itemStyles.headFont);
		this.render.setStyle(headEl, 'font-size', this.itemStyles.headFontSize ?? '1.1rem');
		this.render.setStyle(headEl, 'color', this.itemStyles.headColor ?? '#ccc');

		// this.stylingObj?.bodyBgColor && this.render.setStyle(bodyEl, 'transition', 'all .1s ease');
		this.render.setStyle(bodyEl, 'background-color', this.itemStyles.bodyBgColor ?? 'rgba(200, 200, 200, 0.2)');
		this.render.setStyle(bodyEl, 'color', this.itemStyles.bodyColor ?? '#000');
		this.render.setStyle(bodyEl, 'padding', this.itemStyles.bodyPadding ?? '.1rem');
		this.render.setStyle(bodyEl, 'margin', this.itemStyles.bodyMargin ?? '0');
		this.itemStyles.bodyFont && this.render.setStyle(bodyEl, 'font', this.itemStyles.bodyFont);
		this.render.setStyle(bodyEl, 'font-size', this.itemStyles.bodyFontSize ?? '1rem');
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
		// console.log('Clicked ', itemId);
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
