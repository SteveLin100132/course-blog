/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： App Module
 * @CREATE Sunday, 6th October 2019 1:26:52 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppRoutingModule } from './app-routing.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { IconsProviderModule } from './icons-provider.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { codeHightlightProvider } from './shared/utils/code-highlight';

import { CodeProvider } from './core/services/code-provider.service';

import { AppComponent } from './app.component';

registerLocaleData(zh);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  maxScrollbarLength: 100
};

/**
 * App Module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HighlightModule,
    HttpClientModule,
    IconsProviderModule,
    NzAvatarModule,
    NzDrawerModule,
    NgZorroAntdModule,
    PerfectScrollbarModule
  ],
  providers: [
    CodeProvider,
    {
      provide: NZ_I18N,
      useValue: zh_TW
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: codeHightlightProvider,
        config: {
          tabReplace: 2
        }
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
