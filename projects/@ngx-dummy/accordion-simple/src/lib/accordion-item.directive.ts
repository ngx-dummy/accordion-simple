/* eslint-disable @angular-eslint/no-host-metadata-property */
/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
  Input,
  Renderer2,
  Inject,
  OnInit,
  Host,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { filter, tap, pluck, map, takeUntil } from 'rxjs/operators';

import { AccordionItemComponent } from './accordion-item.component';
import { AccordionOpenService } from './accordion-open.service';
import { NgAnimationEvent } from './animations';
import { IToggler, IAccordionItemStyling, AccordionItem, AccordionItemInternal, ItemTemplateContext, sanitizeHTML } from './settings/';

@Directive({
  selector: '[ngxdAccordionItem]',
  host: {
    '[class.opened]': 'isOpen',
    '(dblclick)': 'onDblClick([$event.target, $event.currentTarget])',
    '(click)': 'onClick([$event.target, $event.currentTarget])',
  },
})
export class AccordionItemDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input('ngxdAccordionItem') item: AccordionItemInternal = null;
  @Input('styling') itemStyles: IAccordionItemStyling = {
    headHeight: '50px',
    headBgColor: '#ccc',
    headColor: '#fff',
    bodyBgColor: '#fff',
    bodyColor: '#000',
    fontSize: '10px',
    bodyPadding: '0',
  };
  @Input() logo = undefined;
  @Input() openSign = undefined;
  @Input() closeSign = undefined;
  @Input() bodyDblclkClose = false;
  @Input() isNumbered = false;
  @Output() toggled: EventEmitter<IToggler> = new EventEmitter();
  isOpen = false;
  private hostDestroy$$: Subject<any> = new Subject();

  constructor(
    @Inject(AccordionItemComponent) private hostCmp: AccordionItemComponent,
    @Inject(ElementRef) private hostElRef: ElementRef<HTMLElement>,
    @Host() private itemStatusSvc: AccordionOpenService,
    private render: Renderer2,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
  ) {}

  startAnim(e: NgAnimationEvent) {
    const classes = <DOMTokenList>e.element.classList;
    if (e.fromState === 'void') {
      classes?.add('closed');
    }
    if (e.fromState === 'closed' && e.toState === 'opened') {
      classes.replace('closed', 'opened');
    }
  }
  doneAnim(e: NgAnimationEvent) {
    const classes = <DOMTokenList>e.element.classList;
    if (e.fromState == 'opened' && e.toState == 'closed') {
      classes.replace('opened', 'closed');
    }
  }

  ngOnInit() {
    this.hostCmp.item = {
      ...this.item,
      body:
        typeof this.item.body === 'string'
          ? sanitizeHTML(this.item.body, this.sanitizer)
          : ({
              itemTemplate: this.item.body.itemTemplate,
              itemBody: sanitizeHTML(this.item.body.itemBody, this.sanitizer),
            } as ItemTemplateContext),
      itemNum: this.isNumbered ? +this.item.itemId + 1 : null,
    } as Partial<AccordionItem>;

    this.hostCmp.isOpen$ = this.itemStatusSvc.itemsOpen$.pipe(
      takeUntil(this.hostDestroy$$),
      filter((val) => !!val && !!val.length),
      map((toggles: IToggler[]) => toggles.find(({ itemId }) => itemId === +this.item.itemId)),
      pluck('isOpen'),
      tap((isOpen) => (this.isOpen = isOpen))
    );

    this.hostCmp.startAnim = this.startAnim;
    this.hostCmp.doneAnim = this.doneAnim;
  }

  ngAfterViewInit() {
    const nativeEl = this.hostElRef.nativeElement;
    const itemEl = nativeEl.getElementsByClassName('accord-item').item(0) as HTMLElement;
    const headEl = nativeEl.getElementsByClassName('accord-item__header').item(0) as HTMLElement;
    const bodyEl = nativeEl.getElementsByClassName('accord-item__body').item(0) as HTMLElement;

    {
      /** set up the accordion item header images\' sources */
      const headElLogoImgEl = headEl.getElementsByClassName('accord-item__header--start-img').item(0) as HTMLImageElement;
      const headElCloserImgEl = headEl.getElementsByClassName('accord-item__header--end-img').item(0) as HTMLImageElement;
      this.logo && this.render.setAttribute(headElLogoImgEl, 'data-src', this.logo);
      this.openSign && this.render.setAttribute(headElCloserImgEl, 'data-opensrc', this.openSign);
      this.closeSign && this.render.setAttribute(headElCloserImgEl, 'data-closesrc', this.closeSign);
      this.cd.detectChanges();
    }

    this.render.setStyle(itemEl, 'margin', this.itemStyles.margin ?? '0');
    this.render.setStyle(itemEl, 'padding', this.itemStyles.padding ?? '0');
    this.itemStyles.font && this.render.setStyle(itemEl, 'font', this.itemStyles.font);
    this.itemStyles.fontSize && this.render.setStyle(itemEl, 'font-size', this.itemStyles.fontSize);
    this.itemStyles.fontStyle && this.render.setStyle(itemEl, 'font-style', this.itemStyles.fontStyle);
    this.itemStyles.fontFamily && this.render.setStyle(itemEl, 'font-family', this.itemStyles.fontFamily);
    this.render.setStyle(itemEl, 'margin-bottom', this.itemStyles.marginBottom);
    this.render.setStyle(itemEl, 'margin-top', this.itemStyles.marginTop);
    this.itemStyles.headBgColor && nativeEl.style.setProperty('--ngxd-head-item-color', this.itemStyles.headBgColor);

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

    this.render.setStyle(bodyEl, 'cursor', this.bodyDblclkClose ? 'grab' : 'default');
  }

  ngOnDestroy() {
    this.hostDestroy$$.next();
    this.hostDestroy$$.complete();
  }

  onClick = ([{ outerHTML }, { dataset }]) => (!!outerHTML && !!dataset && outerHTML.includes('header') ? this.handleClick({ ...dataset }) : void 0);
  onDblClick = ([{ outerHTML }, { dataset }]) =>
    !!outerHTML && this.bodyDblclkClose && outerHTML.includes('accord-item__body') ? this.handleClick({ ...dataset }) : void 0;

  private handleClick = ({ idx, ...rest } = { idx: -1 }) => this.toggle(+idx);
  private toggle = (itemId: number) => this.toggled.emit({ itemId, isOpen: !this.isOpen });
}
