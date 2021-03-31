/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from '@ngx-dummy/accordion-simple/index';
import { AppComponent2 } from './app2.component';

@NgModule({
	declarations: [AppComponent, AppComponent2],
	imports: [BrowserModule, AccordionModule],
	bootstrap: [AppComponent, AppComponent2],
})
export class AppModule { }
