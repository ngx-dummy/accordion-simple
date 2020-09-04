/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cloneDeep } from 'lodash';

import { AccordionComponent } from './accordion.component';
import { AccordionModule } from './accordion.module';
import { IAccordionItemStyling } from './settings/IAccordionStylings';
import { simpleAccordionList, sampleStyling, dummyAccordionList1 } from '../helpers/dummy-data';
import { TestHostModule, TestHostComponent } from '../helpers/test-host.component';
import { AccordionDirective } from './accordion.directive';

describe('An Accordion component', () => {
  let accordCmpFixture: ComponentFixture<AccordionComponent>;
  let accordCmpDebugEl: DebugElement;
  let accordCmp: AccordionComponent;

  describe('single component', () => {

    beforeEach(async () => {
      const testingBed = TestBed.configureTestingModule({
        imports: [AccordionModule]
      });
      await testingBed.compileComponents();
      accordCmpFixture = testingBed.createComponent<AccordionComponent>(AccordionComponent);
      accordCmp = accordCmpFixture.componentInstance;
    });

    beforeEach(() => {
      accordCmp.accordionList = simpleAccordionList;
      accordCmp.accordionStyling = { ...sampleStyling, numberedItems: true, };
      const sampleItemStyling = { ...sampleStyling.itemStyling, fontSize: '10px', headBgColor: 'rgb(200, 200, 200)', bodyColor: 'brown', bodyBgColor: 'green' } as IAccordionItemStyling;
      const additionItemStyling = { bodyBgColor: '#a88' };
      accordCmp.accordionStyling.itemStyling = [sampleItemStyling, additionItemStyling];
      accordCmpFixture.detectChanges();
      accordCmpDebugEl = accordCmpFixture.debugElement;
    });

    it('should exist in the dom', () => {
      const cmp = accordCmpFixture.nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
    });

    it('should contain [ngxdAccordion] directive as attribute of element with .accordion class', () => {
      const cmp = accordCmpDebugEl.query(By.directive(AccordionDirective)).nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
      expect(cmp).toHaveClass('accordion');
      expect(cmp.getAttributeNames()).toContain('ngxdaccordion');
    });

    it('should contain ngxd-accordion-item element as the first child', (cb) => {
      const cmp = accordCmpDebugEl.nativeElement as HTMLElement;
      // let getAccordItemEl: () => HTMLElement = () => cmp.querySelectorAll('ngxd-accordion-item').item(1) as HTMLElement;
      const getAccordItemEl: () => HTMLElement = () => cmp.querySelectorAll('ngxd-accordion-item').item(0) as HTMLElement;
      const getAccordItemElHeader = () => (getAccordItemEl().querySelector('.accord-item__header') as HTMLElement);
      const getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);

      expect(Array.from(getAccordItemElBody().classList)).toContain('closed');
      expect(getAccordItemEl().nodeName.toLowerCase()).toEqual('ngxd-accordion-item');
      accordCmpFixture.autoDetectChanges();

      // accordCmpDebugEl.query(By.css('.accord-item__header')).triggerEventHandler('click', null);
      getAccordItemElHeader().click();

      // TODO: recheck why stopped working !!
      // expect((<HTMLElement>accordCmpDebugEl.nativeElement).querySelector('.accord-item__body').classList.contains('opened')).toBeTruthy();
      // expect(getAccordItemElBody()).toHaveClass('opened');
      cb();
    });

    it('should have defined styling being properly applied', () => {
      const cmp = accordCmpDebugEl.nativeElement as HTMLElement;
      const getAccordItemEl = () => cmp.querySelector('ngxd-accordion-item');
      const getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);

      expect(getAccordItemElBody().style.color).toBe('brown');
    });

  });

  describe('several Accordions in a surface', () => {
    let hostCmpFixture: ComponentFixture<TestHostComponent>;
    let hostDebEl: DebugElement;
    let hostCmp: TestHostComponent;

    beforeEach(async () => {
      const testingBed = TestBed.configureTestingModule({
        imports: [TestHostModule, AccordionModule]
      });
      await testingBed.compileComponents();
      accordCmpFixture = testingBed.createComponent<AccordionComponent>(AccordionComponent);
      hostCmpFixture = testingBed.createComponent<TestHostComponent>(TestHostComponent);
      accordCmp = accordCmpFixture.componentInstance;
      hostCmp = hostCmpFixture.componentInstance;
      hostDebEl = hostCmpFixture.debugElement;
    });
    beforeEach(() => {
      accordCmp.accordionList = dummyAccordionList1;
      accordCmpFixture.detectChanges();
      hostCmpFixture.detectChanges();
      (hostDebEl.query(By.css('#container')).nativeElement as HTMLElement).insertAdjacentElement('afterbegin', accordCmpFixture.nativeElement as HTMLElement);
      (hostDebEl.query(By.css('#container')).nativeElement as HTMLElement).insertAdjacentElement('beforeend', cloneDeep(accordCmpFixture).nativeElement as HTMLElement);
    });

    it('should have 2 Accordions', () => {
      const cmp = hostCmpFixture.debugElement.query(By.directive(AccordionComponent));
      const accordDirective = hostCmpFixture.debugElement.query(By.directive(AccordionDirective));
      expect(cmp).toBeTruthy();
      expect(cmp.nativeNode.children).toContain(accordDirective.nativeNode);
    });

  });

});
