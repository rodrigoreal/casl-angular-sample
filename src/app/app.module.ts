import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbilityModule } from '@casl/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AbilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
