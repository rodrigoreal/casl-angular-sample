import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityModule } from '@casl/angular';

import { LazyloadedComponent } from './lazyloaded.component';
import { AppLazyloadedRoutingModule } from './lazyloaded-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AbilityModule,
    AppLazyloadedRoutingModule
  ],
  declarations: [LazyloadedComponent]
})
export class LazyloadedModule { }
