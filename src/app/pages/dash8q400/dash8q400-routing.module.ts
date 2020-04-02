import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dash8q400Component } from './dash8q400.component';

const routes: Routes = [
  { path: '', component: Dash8q400Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dash8q400RoutingModule { }
