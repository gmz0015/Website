import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RESTfulComponent } from '../restful/restful.component';
import { RESTfulRoutingModule } from './restful-routing.module';

import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [RESTfulComponent],

  imports: [
    RESTfulRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
  ],

  exports: [
    RESTfulComponent
  ],

  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],

  bootstrap: [RESTfulComponent]
})
export class RESTfulModule { }
