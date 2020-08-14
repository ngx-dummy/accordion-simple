import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';

describe('An Accordion-item component', () => {

  describe('single component', () => {
    let accordItemCmpFixture: ComponentFixture<AccordionItemComponent>;
    let accordItemCmp: AccordionItemComponent;
    let accordItemNativeEl: HTMLElement;
    let accordItemDebugEl: DebugElement;
    const getItemHeader = () => accordItemNativeEl?.querySelector('.accord-item__header');
    const getItemBody = () => accordItemNativeEl?.querySelector('.accord-item__body');
    const isOpen$$: Subject<boolean> = new Subject();
    let isOpen$ = null;

    beforeEach(async () => {
      let testingBed = TestBed.configureTestingModule({
        declarations: [AccordionItemComponent, AccordionItemDirective]
      });
      await testingBed.compileComponents();
      accordItemCmpFixture = testingBed.createComponent<AccordionItemComponent>(AccordionItemComponent);
      accordItemCmp = accordItemCmpFixture.componentInstance;
    });

    beforeEach(() => {
      accordItemNativeEl = accordItemCmpFixture.nativeElement as HTMLElement;
      accordItemDebugEl = accordItemCmpFixture.debugElement;
      isOpen$ = isOpen$$.asObservable();
      accordItemCmp.isOpen$ = isOpen$;
      accordItemCmp.item = {
        body: 'TMPL DATA'
      };
      accordItemCmpFixture.autoDetectChanges();
    });

    it('should exist', () => {
      expect(accordItemNativeEl).toBeTruthy();
    });

    it('should be open', () => {
      isOpen$$.next(true);
      isOpen$.subscribe(_ => {
        expect(getItemHeader().classList).toContain('opened');
        expect(getItemBody().classList).toContain('opened');
      });
    });

    it('should be closed', () => {
      isOpen$$.next(false);
      isOpen$.subscribe(_isOpenVal => {
        expect(getItemBody().classList).toContain('closed');
      });
    });

  });

});