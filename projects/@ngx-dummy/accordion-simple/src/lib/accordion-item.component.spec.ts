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
import { Subject } from 'rxjs';
import { AccordionItemImgDirective } from './accordion-item-img.directive';

import { AccordionItemComponent } from './accordion-item.component';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionModule } from './accordion.module';

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
      const testingBed = TestBed.configureTestingModule({
        declarations: [AccordionItemComponent, AccordionItemDirective, AccordionItemImgDirective]
        // imports: [AccordionModule]
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

    // it('should be open', () => {
    //   isOpen$$.next(true);
    //   isOpen$.subscribe(_ => {
    //     expect(getItemHeader().classList).toContain('opened');
    //     expect(getItemBody().classList).toContain('opened');
    //   });
    // });

    it('should be closed', () => {
      isOpen$$.next(false);
      isOpen$.subscribe(_isOpenVal => {
        expect(getItemBody().classList).toContain('closed');
      });
    });

  });

});
