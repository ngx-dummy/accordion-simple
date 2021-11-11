/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

import { AccordionModule, AccordionComponent } from '@ngx-dummy/accordion-simple/index';
import { AppComponent } from './app.component';
import { dummyAccordionList1 as list1 } from './helpers/dummy-data';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
	let appCmpFixture: ComponentFixture<AppComponent>;
	let app: AppComponent;
	const testTitle = 'Test Sample';

	beforeEach(async () => {
		const testingBed = TestBed.configureTestingModule({
			imports: [AccordionModule, NoopAnimationsModule],
			declarations: [AppComponent],
		});
		await testingBed.compileComponents();
		appCmpFixture = TestBed.createComponent(AppComponent);
		app = appCmpFixture.componentInstance;
		app.title = testTitle;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
		expect(app.title).toEqual(testTitle);

		app.title = 'Test2Title';
		appCmpFixture.detectChanges();
		expect(app.title).toEqual('Test2Title');
	});

	it('should get accordion', () => {
		const getChildAccordion: () => DebugElement = () => appCmpFixture.debugElement.query(By.css('ngxd-accordion:first-of-type'));
		const getChildAccordionCmpInstance = () => getChildAccordion().componentInstance;
		app.accordList2 = list1;
		app.accordList$ = of(list1);
		app.ngAfterViewInit();
		appCmpFixture.detectChanges();

		expect(getChildAccordion()).toBeTruthy();
		expect(getChildAccordionCmpInstance()).toBeInstanceOf(AccordionComponent);
		expect((getChildAccordionCmpInstance() as AccordionComponent).name.toLowerCase()).toContain('accordion');
		expect(getChildAccordion().nativeElement.querySelectorAll('ngxd-accordion-item').length).toBeGreaterThan(1);
	});
});
