/* eslint-disable @angular-eslint/no-host-metadata-property */
/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { AfterContentChecked, AfterViewInit, Directive, ElementRef, HostBinding, Renderer2, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getSvgSafeRes } from './settings/';
import { arrow_down, logo_svg } from './theming/icons-base';

const l = console.log;

enum ImgClasses {
	LOGO = 'accord-item__header--start-img',
	ENDING = 'accord-item__header--end-img',
}
enum ImgLoadClass {
	SUCCESS = 'img-loaded__success',
	ALTER = 'img-load__alter',
}

@Directive({
	selector: '.accord-item__header-img',
	host: {
		'(load)': 'onLoad($event)',
		'(error)': 'onError($event)',
		'[attr.loading]': '"lazy"',
	},
})
export class AccordionItemImgDirective implements AfterViewInit, AfterContentChecked {
	@HostBinding('attr.src') get src() {
		return this._src;
	}

	private _nativeImgEl: HTMLImageElement;
	private _src: string | SafeResourceUrl | undefined;
	private _openSign: string | SafeResourceUrl | undefined;
	private _closeSign: string | SafeResourceUrl | undefined;
	private _baseLogoImg = getSvgSafeRes(logo_svg, this.sanitizer);
	private _baseChevronImg = getSvgSafeRes(arrow_down, this.sanitizer);
	private _isSet = false;
	private _needToRecheck = false;

	constructor(private el: ElementRef<HTMLImageElement>, private renderer: Renderer2, private zone: NgZone, private sanitizer: DomSanitizer) {}

	ngAfterViewInit() {
		this._nativeImgEl = this.el.nativeElement;
	}

	ngAfterContentChecked() {
		if (this._isSet && !this._needToRecheck) {
			return;
		}
		if (this._isSet && this._needToRecheck) {
			return this._doOpenCloseSrcRecheck();
		}

		if (this._isLogoImg()) {
			// this._src = this.readElDataSet('src') || this._baseLogoImg;
			// return this.setNoRecheck();
			return this._setItemHeaderImgSafeSrc(this._readElDataSet('src') || this._baseLogoImg);
		} else if (this._isCloserImg()) {
			this._openSign = this._readElDataSet('opensrc') ?? undefined;
			this._closeSign = this._readElDataSet('closesrc') ?? undefined;
			if (!this._isImgOpenClose()) {
				// this._src = this._baseChevronImg;
				// return this.setNoRecheck();
				return this._setItemHeaderImgSafeSrc(this._baseChevronImg);
			} else {
				if (this._openSign !== this._closeSign) {
					this._needToRecheck = true;
				}
				this._isSet = true;
				return;
			}
		}
	}

	onLoad = ({ target, ...rest }: { target: HTMLImageElement; rest: any[] }) => this._setLoadSuccess(target);
	onError = ({ target, ...rest }: { target: HTMLImageElement; rest: any[] }) => {
		this._setLoadAlter(target);
		if (target.classList.contains(ImgClasses.LOGO)) {
			// this.setItemHeaderImgSrc(target, this._baseLogoImg);
			this._setItemHeaderImgSafeSrc(this._baseLogoImg);
		} else if (target.classList.contains(ImgClasses.ENDING)) {
			// this.setItemHeaderImgSrc(target, this._baseChevronImg);
			this._setItemHeaderImgSafeSrc(this._baseChevronImg);
		} else {
			return l('Not an Accordion Item header image');
		}
	};

	private _doOpenCloseSrcRecheck = () => {
		this.zone.runOutsideAngular(() => {
			this._src = this._nativeImgEl?.classList.contains('open') ? this._closeSign : this._openSign;
		});
	};
	private _setItemHeaderImgSrc = (imgRef: HTMLImageElement, src: string | SafeResourceUrl) => this.renderer.setAttribute(imgRef, 'src', src as string);
	private _setItemHeaderImgSafeSrc = (src: string | SafeResourceUrl) => {
		this._src = src;
		return this._setNoRecheck();
	};
	private _readElDataSet = (attr: string) => this._nativeImgEl?.dataset[attr];
	private _setLoadSuccess = (target: HTMLImageElement) => {
		target.classList.add(ImgLoadClass.SUCCESS);
		this._isSet = true;
	};
	private _setLoadAlter = (target: HTMLImageElement) => {
		target.classList.add(ImgLoadClass.ALTER);
		this._setNoRecheck();
	};
	private _isImgOpenClose = () => !!this._closeSign && !!(this._closeSign as string).length && !!this._openSign && !!(this._openSign as string).length;
	private _isLogoImg = () => this._nativeImgEl?.classList.contains(ImgClasses.LOGO);
	private _isCloserImg = () => this._nativeImgEl?.classList.contains(ImgClasses.ENDING);
	private _setNoRecheck = () => {
		this._isSet = true;
		this._needToRecheck = false;
	};
}
