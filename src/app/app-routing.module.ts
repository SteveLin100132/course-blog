/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 主頁路由
 * @CREATE Sunday, 6th October 2019 1:26:52 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/angular' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule)
  }
];

/**
 * 主頁路由
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
