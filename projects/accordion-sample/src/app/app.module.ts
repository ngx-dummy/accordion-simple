import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from '@ngx-dummy/accordion-simple/accordion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
