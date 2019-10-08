/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程範本模組
 * @CREATE Sunday, 6th October 2019 8:05:19 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SessionHandsonModule } from './../session-handson/session-handson.module';
import { SessionDescriptionModule } from './../session-description/session-description.module';

import { SessionTemplateComponent } from './session-template.component';

/**
 * 課程範本模組
 */
@NgModule({
  imports: [
    CommonModule,
    SessionHandsonModule,
    SessionDescriptionModule
  ],
  exports: [
    SessionTemplateComponent
  ],
  declarations: [
    SessionTemplateComponent
  ]
})
export class SessionTemplateModule { }
