/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程說明元件
 * @CREATE Sunday, 6th October 2019 3:54:50 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { SessionDescriptionComponent } from './session-description.component';

/**
 * 課程說明元件
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzTagModule,
    NzGridModule,
    NzRateModule,
    NzAvatarModule,
    NzCommentModule,
    NzDividerModule,
    NzSkeletonModule
  ],
  exports: [
    SessionDescriptionComponent,
  ],
  declarations: [
    SessionDescriptionComponent
  ]
})
export class SessionDescriptionModule { }
