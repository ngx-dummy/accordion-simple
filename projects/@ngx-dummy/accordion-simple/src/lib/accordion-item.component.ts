import { Component, OnInit, Input, Output, EventEmitter, Renderer2, AfterViewInit, ElementRef, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
// import { MDCRipple } from "@material/ripple";

import { AccordionItem } from './IAccordion';
import { IAccordionItemStyling } from '../helpers/IAccordionStylings';
import { logo, plus, minus } from "../helpers/iconsbase64";
import { IToggleer } from '../helpers/IItemToggler';
import { arrow_down } from "./theming/arrow_down";

@Component({
  selector: 'accord-simple-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit, AfterViewInit {
  isOpen = false;
  @Output() toggled: EventEmitter<IToggleer> = new EventEmitter();
  @Input('headBg') headBg = '#4197b2';
  @Input('logo') logo = logo;
  @Input('openSign') openSign = this.getSvg(arrow_down);
  @Input('openSign') closeSign = null; //= minus;
  @Input('styling') stylingObj: IAccordionItemStyling = {
    headHeight: '50px',
    headBgColor: '#4197b2',
    headColor: '#fff',
    bodyBgColor: '#fff',
    bodyColor: '#000',
    logo: this.logo,
    openSign: this.openSign
  };
  @Input() item: AccordionItem = {
    id: 0,
    title: 'Test Item',
    isOpen: false,
    body: 'Some (lorem ipsum) body text...'
  };

  get isImgOpen(): boolean {
    return this.closeSign && this.closeSign.length;
  }

  constructor(private render: Renderer2, public el: ElementRef<HTMLElement>, private sanitaizer: DomSanitizer) { }

  ngOnInit() {
    this.isOpen = this.item.isOpen || false;
    this.item = {
      ...this.item,
      itemNum: (this.item.id && !isNaN(this.item.id)) ? this.item.id + 1 : null
    };
  }

  ngAfterViewInit() {
    const itemEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item')[0] as HTMLElement;
    const headEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item__header')[0] as HTMLElement;
    const bodyEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item__body')[0] as HTMLElement;

    // MDCRipple.attachTo(headEl).activate();

    this.stylingObj.margin && this.render.setStyle(itemEl, 'margin', this.stylingObj?.margin);
    this.stylingObj.padding && this.render.setStyle(itemEl, 'padding', this.stylingObj?.padding);
    this.stylingObj.FontStyles && this.render.setStyle(itemEl, 'font', this.stylingObj.FontStyles);
    this.stylingObj.marginBottom && this.render.setStyle(itemEl, 'margin-bottom', this.stylingObj.marginBottom || '1rem');

    this.stylingObj.headHeight && this.render.setStyle(headEl, 'height', this.stylingObj?.headHeight);
    this.stylingObj.headBgColor && this.render.setStyle(headEl, 'background-color', this.stylingObj?.headBgColor ?? this.headBg);
    this.stylingObj.headColor && this.render.setStyle(headEl, 'color', this.stylingObj?.headColor);

    this.stylingObj.bodyBgColor && this.render.setStyle(bodyEl, 'background-color', this.stylingObj?.bodyBgColor);
    this.stylingObj.bodyColor && this.render.setStyle(bodyEl, 'color', this.stylingObj?.bodyColor);
  }

  toggle(itemId = 0) {
    this.isOpen = !this.isOpen || false;
    this.toggled.emit({ itemId, isOpen: this.isOpen });
  }

  private getSvg(file): SafeStyle {
    const res = ('data:image/svg+xml;base64,' + window.btoa(file));
    return this.sanitaizer.bypassSecurityTrustUrl(res);
  }

}
