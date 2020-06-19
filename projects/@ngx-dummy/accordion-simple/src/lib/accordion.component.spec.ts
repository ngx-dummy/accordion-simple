import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cloneDeep } from 'lodash';

import { AccordionComponent } from './accordion.component';
import { AccordionModule } from './accordion.module';
import { IAccordionItemStyling } from './settings/IAccordionStylings';
import { simpleAccordionList, sampleStyling, dummyAccordionList1 } from '../helpers/dummy-data';
import { TestHostModule, TestHostComponent } from '../helpers/test-host.compoent';
import { AccordionDirective } from './accordion.directive';

describe('An Accordion component', () => {
  let accordCmpFixture: ComponentFixture<AccordionComponent>;
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
      accordCmp.accordionStyling = { ...sampleStyling, numberdItems: true, };
      const sampleItemStyling = { ...sampleStyling.itemStyling, fontSize: '1.8rem', headBgColor: '#ccc', bodyColor: 'brown', bodyBgColor: 'green' } as IAccordionItemStyling;
      const additionItemStyling = { bodyBgColor: '#a88' };
      accordCmp.accordionStyling.itemStyling = [sampleItemStyling, additionItemStyling];
      accordCmpFixture.detectChanges();
    });

    it('should exist in the dom', () => {
      let cmp = accordCmpFixture.nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
    });

    it('should contain [ngxdAccordion] directive as attribute of element with .accordion class', () => {
      let cmp = accordCmpFixture.debugElement.query(By.directive(AccordionDirective)).nativeElement as HTMLElement;
      expect(cmp).toBeTruthy();
      expect(cmp).toHaveClass('accordion');
      // expect(cmp.attributes.getNamedItem('ngxdAccordion')).toContain('ngxdAccordion');
    });

    it('shold contain ngxd-accordion-item element as the first child', () => {
      let cmp = accordCmpFixture.debugElement.nativeElement as HTMLElement;
      let getAccordItemEl = () => (cmp.querySelector('ngxd-accordion-item'));
      let getAccordItemElHeader = () => (getAccordItemEl().querySelector('.accord-item__header') as HTMLElement);
      let getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);

      expect(Array.from(getAccordItemElBody().classList)).toContain('closed');
      expect(getAccordItemEl().nodeName.toLowerCase()).toEqual('ngxd-accordion-item');

      getAccordItemElHeader().click();
      accordCmpFixture.detectChanges();

      expect((<HTMLElement>accordCmpFixture.debugElement.nativeElement).querySelector('.accord-item__body').classList.contains('opened')).toBeTruthy();
      expect(getAccordItemEl()).toHaveClass('opened');
      // tick();
    });

    it('should have defined styling being properly applied', () => {
      let cmp = accordCmpFixture.debugElement.nativeElement as HTMLElement;
      let getAccordItemEl = () => (cmp.querySelector('ngxd-accordion-item'));
      let getAccordItemElHeader = () => (getAccordItemEl().querySelector('.accord-item__header') as HTMLElement);
      let getAccordItemElBody = () => (getAccordItemEl().querySelector('.accord-item__body') as HTMLElement);
      // expect(getAccordItemElBody().style.fontSize).toBe('1.8rem')
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
      (<HTMLElement>hostDebEl.query(By.css('#container')).nativeElement).insertAdjacentElement('afterbegin', cloneDeep(accordCmpFixture).nativeElement as HTMLElement);
    });

    it('should have 2 Accrodions', () => {
      let cmp = hostCmpFixture.debugElement.query(By.directive(AccordionComponent));
      let accordDirective = hostCmpFixture.debugElement.query(By.directive(AccordionDirective));
      expect(cmp).toBeTruthy();
      expect(cmp.nativeNode.children).toContain(accordDirective.nativeNode);
    });

  });

});