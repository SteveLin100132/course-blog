/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程實際演練模組
 * @CREATE Sunday, 6th October 2019 4:37:11 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { SessionHandsonComponent } from './session-handson.component';

/**
 * 課程實際演練模組
 */
@NgModule({
  imports: [
    CommonModule,
    NzCardModule,
    NzTabsModule,
    NzStepsModule
  ],
  exports: [
    SessionHandsonComponent
  ],
  declarations: [
    SessionHandsonComponent
  ]
})
export class SessionHandsonModule { }
