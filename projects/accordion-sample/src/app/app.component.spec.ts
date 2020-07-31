import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

import { AccordionModule, AccordionComponent } from '@ngx-dummy/accordion-simple/index';
import { AppComponent } from './app.component';
import { list1 } from './helpers/dummy-data';

describe('AppComponent', () => {
  let appCmpFixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  const testTitle = 'Test Sample';

  beforeEach(async () => {
    let testingBed = TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [
        AppComponent
      ],
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
    const getchildAccordion: () => DebugElement = () => appCmpFixture.debugElement.query(By.css('ngxd-accordion:first-of-type'));
    const getchildAccordionCmpInstance = () => getchildAccordion().componentInstance;
    app.accordList1 = list1;
    app.accordList$ = of(list1);
    app.ngAfterViewInit();
    appCmpFixture.detectChanges();

    expect(getchildAccordion()).toBeTruthy();
    expect(getchildAccordionCmpInstance()).toBeInstanceOf(AccordionComponent);
    expect((getchildAccordionCmpInstance() as AccordionComponent).name.toLowerCase()).toContain('accordion');
    expect(getchildAccordion().nativeElement.querySelectorAll('ngxd-accordion-item').length).toBeGreaterThan(1);
  });

});
