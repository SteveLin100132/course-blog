/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular教學頁面模組
 * @CREATE Sunday, 6th October 2019 2:04:07 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularRoutingModule } from './angular-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SessionHandsonModule } from './../../shared/templates/session-handson/session-handson.module';
import { SessionTemplateModule } from './../../shared/templates/session-template/session-template.module';
import { SessionDescriptionModule } from './../../shared/templates/session-description/session-description.module';

import { AngularComponent } from './angular.component';
import { Code1s1Component } from './session1/components/code1s1/code1s1.component';
import { Code2s1Component } from './session1/components/code2s1/code2s1.component';
import { Code1s2Component } from './session2/components/code1s2/code1s2.component';
import { Code2s2Component } from './session2/components/code2s2/code2s2.component';
import { Code3s2Component } from './session2/components/code3s2/code3s2.component';
import { Code4s2Component } from './session2/components/code4s2/code4s2.component';
import { Code5s2Component } from './session2/components/code5s2/code5s2.component';
import { HelloWorldComponent } from './session1/components/hello-world/hello-world.component';
import { LifeCycleComponent } from './session1/components/life-cycle/life-cycle.component';
import { Session1Component } from './session1/session1.component';
import { Session2Component } from './session2/session2.component';

/**
 * Angular教學頁面模組
 */
@NgModule({
  imports: [
    AngularRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HighlightModule,
    NzTagModule,
    NzIconModule,
    NzCardModule,
    NzSpinModule,
    NzGridModule,
    NzTabsModule,
    NzTreeModule,
    NzStepsModule,
    NzInputModule,
    NzButtonModule,
    NzDividerModule,
    NzMessageModule,
    NzCollapseModule,
    PerfectScrollbarModule,
    SessionHandsonModule,
    SessionTemplateModule,
    SessionDescriptionModule
  ],
  declarations: [
    AngularComponent,
    Code1s1Component,
    Code2s1Component,
    Code1s2Component,
    Code2s2Component,
    Code3s2Component,
    Code4s2Component,
    Code5s2Component,
    HelloWorldComponent,
    LifeCycleComponent,
    Session1Component,
    Session2Component
  ]
})
export class AngularModule { }
