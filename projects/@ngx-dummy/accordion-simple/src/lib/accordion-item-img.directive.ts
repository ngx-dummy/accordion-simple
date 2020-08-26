import { AfterContentChecked, AfterViewInit, Directive, ElementRef, HostBinding, Renderer2, NgZone, Inject, Self, Optional, ChangeDetectorRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { svgToBase64src } from './settings/';
import { arrow_down, logo_svg } from './theming/';
import { AssetsService, AssetsServiceToken, assetsSvcFactoryProvider } from './theming/assets.service';

const l = console.log;

enum ImgClasses { LOGO = 'accord-item__header--start-img', ENDIMG = 'accord-item__header--end-img' }
enum ImgLoadClass { SUCCESS = 'img-loaded__success', ALTER = 'img-load__alter' }

@Directive({
  selector: '.accord-item__header-img',
  providers: [assetsSvcFactoryProvider],
  host: {
    '(load)': 'onLoad($event)',
    '(error)': 'onError($event)'
  }
})
export class AccordionItemImgDirective implements AfterViewInit, AfterContentChecked {
  @HostBinding('attr.src') get src() { return this._src; }

  private nativeImgEl: HTMLImageElement;
  private _src: string;
  private _openSign: string = undefined;
  private _closeSign: string = undefined;
  private _baseLogoImg = svgToBase64src(logo_svg);
  private _baseChevronImg = svgToBase64src(arrow_down);
  private isSet = false;
  private needToRecheck = false;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private zone: NgZone,
    // @Optional() @Self() @Inject(AssetsServiceToken) private assetsSvc: AssetsService | null
  ) { }

  ngAfterViewInit() {
    this.nativeImgEl = this.el.nativeElement;
  }

  ngAfterContentChecked() {
    if (this.isSet && !this.needToRecheck) return;

    if (this.isSet && this.needToRecheck) return this.doOpenCloseSrcRecheck();

    if (this.isLogoImg()) {
      this._src = this.readElDataSet('src') || this._baseLogoImg;
      return this.setNoRecheck();
    } else if (this.isCloserImg()) {
      this._openSign = this.readElDataSet('opensrc');
      this._closeSign = this.readElDataSet('closesrc');
      // if(!this._openSign) {
      //   this._src = this._baseChevronImg;
      //   return this.setNoRecheck();
      // }
      if (!this.isImgOpenClose()) {
        this._src = this._baseChevronImg; l('setting chevron');
        return this.setNoRecheck();
      } else {
        if (this._openSign !== this._closeSign) { this.needToRecheck = true; }
        this.isSet = true;
      }
    }
  }

  onLoad = ({ target, ...rest }: { target: HTMLImageElement; rest: any[]; }) => this.setLoadSuccess(target);
  onError = ({ target, ...rest }: { target: HTMLImageElement; rest: any[]; }) => {
    this.setLoadAlter(target);
    if (target.classList.contains(ImgClasses.LOGO))
      this.setItemHeaderImgSrc(target, this._baseLogoImg);
    else if (target.classList.contains(ImgClasses.ENDIMG)) {
      this.setItemHeaderImgSrc(target, this._baseChevronImg);
    }
    else return l('Not an Accordion Item header image');
  };

  private doOpenCloseSrcRecheck = () => { (this.zone.runOutsideAngular(() => { l('recheck'); this._src = (this.nativeImgEl.classList.contains('open')) ? this._closeSign : this._openSign; })); };
  private setItemHeaderImgSrc = (imgRef: HTMLImageElement, src: string) => this.renderer.setAttribute(imgRef, 'src', src);

  private readElDataSet = (attr: string) => (this.nativeImgEl?.dataset[attr]);
  private setLoadSuccess = (target: HTMLImageElement) => { target.classList.add(ImgLoadClass.SUCCESS); this.isSet = true; };
  private setLoadAlter = (target: HTMLImageElement) => { target.classList.add(ImgLoadClass.ALTER); this.setNoRecheck(); };
  private isImgOpenClose = () => (!!this._closeSign && !!this._closeSign.length && !!this._openSign && !!this._openSign.length);
  private isLogoImg = () => (this.nativeImgEl?.classList.contains(ImgClasses.LOGO));
  private isCloserImg = () => (this.nativeImgEl?.classList.contains(ImgClasses.ENDIMG));
  private setNoRecheck = () => { this.isSet = true; this.needToRecheck = false; };

}