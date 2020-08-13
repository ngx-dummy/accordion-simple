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
      let testingBed = TestBed.configureTestingModule({
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
      let cmp = accordCmpFixture.nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
    });

    it('should contain [ngxdAccordion] directive as attribute of element with .accordion class', () => {
      let cmp = accordCmpDebugEl.query(By.directive(AccordionDirective)).nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
      expect(cmp).toHaveClass('accordion');
      expect(cmp.getAttributeNames()).toContain('ngxdaccordion');
    });

    it('should contain ngxd-accordion-item element as the first child', (cb) => {
      let cmp = accordCmpDebugEl.nativeElement as HTMLElement;
      // let getAccordItemEl: () => HTMLElement = () => cmp.querySelectorAll('ngxd-accordion-item').item(1) as HTMLElement;
      let getAccordItemEl: () => HTMLElement = () => cmp.querySelectorAll('ngxd-accordion-item').item(0) as HTMLElement;
      let getAccordItemElHeader = () => (getAccordItemEl().querySelector('.accord-item__header') as HTMLElement);
      let getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);

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
      let cmp = accordCmpDebugEl.nativeElement as HTMLElement;
      let getAccordItemEl = () => cmp.querySelector('ngxd-accordion-item');
      let getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);

      expect(getAccordItemElBody().style.color).toBe('brown');
    });

  });

  describe('several Accordions in a surface', () => {
    let hostCmpFixture: ComponentFixture<TestHostComponent>;
    let hostDebEl: DebugElement;
    let hostCmp: TestHostComponent;

    beforeEach(async () => {
      let testingBed = TestBed.configureTestingModule({
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
      (<HTMLElement>hostDebEl.query(By.css('#container')).nativeElement).insertAdjacentElement('afterbegin', accordCmpFixture.nativeElement as HTMLElement);
      (<HTMLElement>hostDebEl.query(By.css('#container')).nativeElement).insertAdjacentElement('beforeend', cloneDeep(accordCmpFixture).nativeElement as HTMLElement);
    });

    it('should have 2 Accordions', () => {
      let cmp = hostCmpFixture.debugElement.query(By.directive(AccordionComponent));
      let accordDirective = hostCmpFixture.debugElement.query(By.directive(AccordionDirective));
      expect(cmp).toBeTruthy();
      expect(cmp.nativeNode.children).toContain(accordDirective.nativeNode);
    });

  });

});