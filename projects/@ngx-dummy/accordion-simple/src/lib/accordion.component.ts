import { Component, OnInit, Input, HostBinding, Renderer2, ElementRef, AfterViewInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Accordion, AccordionItems, IAccordionStyling, IAccordionItemStyling, IToggleer } from './settings/';

let idx = 0;
const l = console.log;

@Component({
  selector: 'ngxd-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @HostBinding('attr.id') get id() { return `accordion_${this.attributes.id}`; }
  @HostBinding('attr.name') get name() { return this.attributes.name; };
  // @HostBinding('attr.opened') opened = this.attributes.name;
  @Input() openSign = null; // = plus
  @Input() closeSign = null; // = minus;
  @Input() listLogo = null; // = logo;
  @Input('accordionList')
  set accordionList(acc: Accordion) {
    this._accord = Object.assign({} as AccordionItems, { items: acc.items, name: acc['name'] ?? 'Sample accordion', id: acc['id'] ?? `acc_${idx}` });
  };
  get accordionList(): Accordion {
    return this._accord;
  }
  private _accord: Accordion = null;

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
      padding: '0'
    }
  };
  itemStyle: IAccordionItemStyling = {
    headBgColor: 'teal',
    headColor: 'white'
  };
  hostEl: HTMLElement;

  constructor(private render: Renderer2, public el: ElementRef<HTMLElement>) { }

  get attributes(): Partial<Accordion> {
    const { id, name } = (this.accordionList && 'name' in this.accordionList && 'id' in this.accordionList) ? { ...this.accordionList } : { name: 'Sample-Accordion', id: ++idx };
    return { id, name };
  }

  ngOnInit() {
    this.accordionList.items = this.accordionList.items.map((item, i) => ({ ...item, id: i }));
    this.hostEl = this.el.nativeElement;
    const accordEl: HTMLDivElement = this.hostEl.querySelector('.accordion');
    const itemsGutts = (typeof this.accordionStyling.itemsGutts === 'boolean' && this.accordionStyling.itemsGutts === false) ? null : (this.accordionStyling.itemsGutts ?? '.5rem');
    this.itemStyle = {
      padding: '0',
      marginBottom: (itemsGutts && typeof itemsGutts === 'string') ? itemsGutts : '0',
      ...this.itemStyle,
      ...this.accordionStyling.itemStyling
    };
    this.accordionStyling.maxWidth && this.render.setStyle(accordEl, 'max-width', this.accordionStyling.maxWidth || '100%');
    this.accordionStyling.margin && this.render.setStyle(accordEl, 'margin', this.accordionStyling.margin || '0');
  }

  onItemToggled({ itemId, isOpen }: IToggleer = { itemId: 0, isOpen: false }) {
    this.accordionList.items = this.accordionList.items.map(item => ((item.id === +itemId) ? { ...item, isOpen } : { ...item, isOpen: false })) ?? [];
  }

}
