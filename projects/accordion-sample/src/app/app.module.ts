import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from '@ngx-dummy/accordion-simple/index';
import { AppComponent2 } from './app2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, AppComponent2],
	imports: [BrowserModule, BrowserAnimationsModule, AccordionModule],
	bootstrap: [AppComponent, AppComponent2],
})
export class AppModule { }
