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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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
import { Code1s3Component } from './session3/components/code1s3/code1s3.component';
import { Code2s3Component } from './session3/components/code2s3/code2s3.component';
import { Code3s3Component } from './session3/components/code3s3/code3s3.component';
import { Code1s4Component } from './session4/components/code1s4/code1s4.component';
import { Code2s4Component } from './session4/components/code2s4/code2s4.component';
import { Code1s5Component } from './session5/components/code1s5/code1s5.component';
import { Code2s5Component } from './session5/components/code2s5/code2s5.component';
import { Code1s6Component } from './session6/components/code1s6/code1s6.component';
import { HelloWorldComponent } from './session1/components/hello-world/hello-world.component';
import { LifeCycleComponent } from './session1/components/life-cycle/life-cycle.component';
import { Result2s4Component } from './session4/components/result2s4/result2s4.component';
import { Session1Component } from './session1/session1.component';
import { Session2Component } from './session2/session2.component';
import { Session3Component } from './session3/session3.component';
import { Session4Component } from './session4/session4.component';
import { Session5Component } from './session5/session5.component';
import { Session6Component } from './session6/session6.component';
import { Ws02Component } from './session2/components/ws02/ws02.component';
import { Ws03Component } from './session3/components/ws03/ws03.component';
import { Ws04Component } from './session4/components/ws04/ws04.component';

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
    ReactiveFormsModule,
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
    Code1s3Component,
    Code2s3Component,
    Code3s3Component,
    Code1s4Component,
    Code2s4Component,
    Code1s5Component,
    Code2s5Component,
    Code1s6Component,
    HelloWorldComponent,
    LifeCycleComponent,
    Result2s4Component,
    Session1Component,
    Session2Component,
    Session3Component,
    Session4Component,
    Session5Component,
    Session6Component,
    Ws02Component,
    Ws03Component,
    Ws04Component
  ]
})
export class AngularModule { }
