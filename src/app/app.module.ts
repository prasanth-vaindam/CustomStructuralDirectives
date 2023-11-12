import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppIFDirective } from './app-if.directive';
import { IfTrueDirective } from './if-true.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppIFDirective,
    IfTrueDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
