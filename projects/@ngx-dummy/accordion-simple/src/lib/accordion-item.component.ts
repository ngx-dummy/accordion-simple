import { Component, OnInit, Input, Output, EventEmitter, Renderer2, AfterViewInit, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MDCRipple } from '@material/ripple';

import { arrow_down } from './theming/arrow_down';
import { AccordionItem, IAccordionItemStyling, pngBase64ToBlob } from './settings/';
import { logo as baseLogo } from './theming/iconsbase64';

const l = console.log;
let idx = 0;

@Component({
  selector: 'ngxd-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionItemComponent implements OnInit {
  @Input() headBg = '#ccc';
  @Input('logo')
  set logo(img: string) {
    this._logo = ((img && !!img.length)) ? img : this.getSanResource(baseLogo);
  }
  get logo() {
    return this._logo;
  }
  @Input() openSign = null;    // plus
  @Input() closeSign = null;   // minus
  @Input() item: AccordionItem = { title: 'Test Item', body: 'Some (lorem ipsum) body text...' };
  isOpen = false;
  _logo;

  constructor(private sanitaizer: DomSanitizer) { }

  ngOnInit() {
    this.isOpen = this.item.isOpen || false;
    this.item = {
      ...this.item,
      itemNum: (this.item.id && !isNaN(this.item.id)) ? this.item.id + 1 : null
    };
  }

  get isImgOpen() {
    const imgOpen = (this.closeSign && !!this.closeSign.length && this.openSign && !!(<string>this.openSign).length);
    if (!imgOpen) this.openSign = this.getSvg(arrow_down);
    return imgOpen;
  }

  private getSvg(file: string) {
    return this.sanitazeRes('data:image/svg+xml;base64,' + btoa(file));
  }

  private getSanResource(file: string) {
    let obj = URL.createObjectURL(pngBase64ToBlob(file));
    return this.sanitazeRes(obj);
  }

  private sanitazeRes(item: string) {
    return this.sanitaizer.bypassSecurityTrustResourceUrl(item);
  }

}
