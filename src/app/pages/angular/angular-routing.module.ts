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
import { Session3Component } from './session3/session3.component';
import { Session4Component } from './session4/session4.component';
import { Session5Component } from './session5/session5.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'session1', component: Session1Component },
  { path: 'session2', component: Session2Component },
  { path: 'session3', component: Session3Component },
  { path: 'session4', component: Session4Component },
  { path: 'session5', component: Session5Component }
];

/**
 * Angular接學頁面路由
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
