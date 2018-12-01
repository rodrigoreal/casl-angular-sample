import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadedComponent } from './lazyloaded.component';

const routes: Routes = [
  {
    path: '',
    component: LazyloadedComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLazyloadedRoutingModule {}
