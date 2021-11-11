/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU LGPLv3 License
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from '@ngx-dummy/accordion-simple/index';
import { App2Component } from './app2.component';

@NgModule({
	declarations: [AppComponent, App2Component],
	imports: [BrowserModule, AccordionModule],
	bootstrap: [AppComponent, App2Component],
})
export class AppModule {}
