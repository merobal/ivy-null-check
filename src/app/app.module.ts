import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandlerAComponent } from './handler-a/handler-a.component';
import { HandlerBComponent } from './handler-b/handler-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HandlerAComponent,
    HandlerBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
