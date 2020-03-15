import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { AccordionItem } from '../../../IAccordion';
import { IAccordionItemStyling, IAccordionItemHeadStyling } from '../../../helpers/IAccordionStylings';

@Component({
  selector: 'accord-simple-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit, AfterViewInit {
  isOpen = false;
  @Output() toggler: EventEmitter<{ id: number, isOpen: boolean; }> = new EventEmitter();
  @Input('headBg') headBg = 'teal';
  @Input('logo') logo = '../assets/list-box.svg';
  // @Input('openSign') openSign = '/assets/plus.svg';
  @Input('openSign') openSign = '../assets/plus.svg';
  @Input('styling') stylingObj: IAccordionItemStyling = {
    headBgColor: 'teal',
    headColor: '#fff',
    bodyBgColor: '#fff',
    bodyColor: '#000',
    logo: this.logo,
    openSign: this.openSign
  };
  @Input('item') item: AccordionItem = {
    id: 0,
    title: 'Test Item',
    isOpen: false,
    body: 'Some (lorem ipsum) body text...'
  };

  constructor(private render: Renderer2, public el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.isOpen = this.item.isOpen || false;
    this.item = {
      ...this.item
    };
  }

  ngAfterViewInit() {
    const accordItemEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item')[0] as HTMLElement;
    const headEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item__header')[0] as HTMLElement;
    const bodyEl: HTMLElement = this.el.nativeElement.getElementsByClassName('accord-item__body')[0] as HTMLElement;

    this.stylingObj.margin && this.render.setStyle(accordItemEl, 'margin', this.stylingObj?.margin);
    this.stylingObj.padding && this.render.setStyle(accordItemEl, 'padding', this.stylingObj?.padding);

    this.stylingObj.headBgColor && this.render.setStyle(headEl, 'background-color', this.stylingObj?.headBgColor || this.headBg);
    this.stylingObj.headColor && this.render.setStyle(headEl, 'color', this.stylingObj?.headColor);

    this.stylingObj.bodyBgColor && this.render.setStyle(bodyEl, 'background-color', this.stylingObj?.bodyBgColor);
    this.stylingObj.bodyColor && this.render.setStyle(bodyEl, 'color', this.stylingObj?.bodyColor);
  }

  toggle(item) {
    this.isOpen = !this.isOpen || false;
    this.toggler.emit({ id: item.id, isOpen: this.isOpen });
  }

}
