import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NgZorroAntdModule,
  ],

  declarations: [
    WelcomeComponent,
  ],

  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
