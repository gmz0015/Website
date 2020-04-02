import { NgModule } from '@angular/core';

import { Dash8q400RoutingModule } from './dash8q400-routing.module';

import { Dash8q400Component } from './dash8q400.component';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    Dash8q400RoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
  ],

  declarations: [
    Dash8q400Component,
  ],

  exports: [
    Dash8q400Component
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],

  bootstrap: [Dash8q400Component]
})
export class Dash8q400Module { }
