import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('An Accordion-item component', () => {
  let accordItemCmpFixture: ComponentFixture<AccordionItemComponent>;
  let accordItemCmp: AccordionItemComponent;
  let accordItemNativeEl: HTMLElement;
  let accordItemDebugEl: DebugElement;

  describe('single component', () => {

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
      accordItemCmp.isOpen$ = of(false);
      accordItemCmp.isOpen$ = of(true).pipe(delay(100));
    });

    it('should exist', () => {
      expect(accordItemNativeEl).toBeTruthy();
    });

    it('should be open', () => {
      accordItemCmpFixture.autoDetectChanges();
      expect(accordItemNativeEl.querySelector('.accord-item__header').classList).toContain('opened');
      expect(accordItemNativeEl.querySelector('.accord-item__body').classList).toContain('opened');
    });

    it('should be closed', (cb) => {
      let isOpenObs: Observable<boolean> = new Observable(observer => { Array.from(new Array(3)).fill((_, i) => (i % 2 === 0 ? true : false)).forEach(val => observer.next(val)); });
      accordItemCmp.isOpen$ = isOpenObs;

      accordItemCmpFixture.autoDetectChanges();
      isOpenObs.subscribe(_isOpenVal => {
        expect(accordItemNativeEl.querySelector('.accord-item__header').classList).not.toContain('opened');
        expect(accordItemNativeEl.querySelector('.accord-item__body').classList.contains('closed')).toBeTruthy();
        cb();
      });
    });

  });

});