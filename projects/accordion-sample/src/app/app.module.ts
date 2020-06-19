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
