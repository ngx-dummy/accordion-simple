import { Component, OnInit, Input } from '@angular/core';

import { dummyAccordionList } from '../../../helpers/dummy-data';
import { IAccordionItemStyling, IAccordionStyling } from '../../../helpers/IAccordionStylings';
import { Accordion } from '../../../IAccordion';

@Component({
  selector: 'accord-simple-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() accordionList: Accordion = dummyAccordionList;
  @Input() accordionStyling: IAccordionStyling = {
    numberdItems: false,
    guttedItems: '1rem',
    itemStyling: {
      headBgColor: 'teal',
      headColor: '#fff',
      bodyBgColor: '#fff',
      bodyColor: '#000',
      margin: '1rem',
      padding: '1px',
      logo: '../assets/list-box.svg',
      openSign: '../assets/plus.svg'
    }
  };
  itemStyle: IAccordionItemStyling = {
    headBgColor: 'teal',
    headColor: ''
  };

  constructor() { }

  ngOnInit() {
    const itemsGutts = (typeof this.accordionStyling.guttedItems === "boolean") ? null : '1rem';
    this.itemStyle = {
      padding: '1px',
      margin: (itemsGutts && typeof itemsGutts === 'string') ? itemsGutts : '0',
      ...this.itemStyle,
      ...this.accordionStyling.itemStyling
    };
  }

  onItemToggled({ id, isOpen }: { id: number, isOpen: boolean; } = { id: 0, isOpen: false }) {
    this.accordionList.items = this.accordionList?.items?.map(item => { return (item.id == id) ? { ...item, isOpen } : { ...item, isOpen: false }; });
  }

}
