import { Component, OnInit, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';

import { dummyAccordionList as sampleData } from '../helpers/dummy-data';
import { IAccordionItemStyling, IAccordionStyling } from '../helpers/IAccordionStylings';
import { Accordion } from './IAccordion';
import { IToggleer } from '../helpers/IItemToggler';

@Component({
  selector: 'accord-simple-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @HostBinding('attr.id') id = 'accordion_0';
  @Input() openSign = null; // = plus
  @Input() closeSign = null; // = minus;
  @Input() accordionList: Accordion = sampleData;
  @Input() accordionStyling: IAccordionStyling = {
    numberdItems: false,
    maxWidth: '100%',
    itemsGutts: '1rem',
    margin: '0',
    itemStyling: {
      headBgColor: '#4197b2',
      headColor: '#fff',
      bodyBgColor: '#fff',
      bodyColor: '#000',
      margin: '0',
      padding: '0',
      openSign: null,
      closeSign: null
    }
  };
  itemStyle: IAccordionItemStyling = {
    headBgColor: 'teal',
    headColor: 'white'
  };

  constructor(private render: Renderer2, public el: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const hostEl = this.el.nativeElement;
    const accordEl = hostEl.querySelector('.accordion');
    const itemsGutts = (typeof this.accordionStyling.itemsGutts === 'boolean' && this.accordionStyling.itemsGutts === false) ? null : (this.accordionStyling.itemsGutts ?? '.5rem');
    this.itemStyle = {
      padding: '0',
      marginBottom: (itemsGutts && typeof itemsGutts === 'string') ? itemsGutts : '0',
      ...this.itemStyle,
      ...this.accordionStyling.itemStyling
    };
    this.id = `accordion_${this.accordionList?.id?.toString() ?? '0'}`;
    this.accordionStyling.maxWidth && this.render.setStyle(accordEl, 'max-width', this.accordionStyling.maxWidth || '100%');
    this.accordionStyling.margin   && this.render.setStyle(accordEl, 'margin', this.accordionStyling.margin || '0');
  }

  onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
    this.accordionList.items = this.accordionList?.items?.map(item => { return (item.id === itemId) ? { ...item, isOpen } : { ...item, isOpen: false }; }) ?? [];
  }

}
