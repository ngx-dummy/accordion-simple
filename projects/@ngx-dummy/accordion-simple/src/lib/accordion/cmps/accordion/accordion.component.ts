import { Component, OnInit } from '@angular/core';

import { dummyAccordionList } from '../../../helpers/dummy-data';
import { IAccordionItemStyling } from '../../../helpers/IAccordionStylings';

@Component({
  selector: 'accord-simple-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionList = dummyAccordionList;
  itemStyle: IAccordionItemStyling = {
    headBgColor: 'teal',
    headColor: ''
  }

  constructor() { }

  ngOnInit() { }

  onItemToggled({ id, isOpen }: { id: number, isOpen: boolean; } = { id: 0, isOpen: false }) {
    this.accordionList.items = this.accordionList?.items?.map(item => { return (item.id == id) ? { ...item, isOpen } : { ...item, isOpen: false }; });
  }

}
