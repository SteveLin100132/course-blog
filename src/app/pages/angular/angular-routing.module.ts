/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular接學頁面路由
 * @CREATE Sunday, 6th October 2019 2:06:08 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularComponent } from './angular.component';
import { Session1Component } from './session1/session1.component';
import { Session2Component } from './session2/session2.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'session1', component: Session1Component },
  { path: 'session2', component: Session2Component }
];

/**
 * Angular接學頁面路由
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
