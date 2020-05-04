import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RESTfulComponent } from './restful.component';

const routes: Routes = [
  { path: '', component: RESTfulComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RESTfulRoutingModule { }
