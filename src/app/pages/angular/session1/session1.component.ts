/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular 第一課元件
 * @CREATE Sunday, 6th October 2019 2:12:06 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SessionCategory } from './../../../shared/templates/session-description/models/session-category';
import { StepDescription } from './../../../shared/templates/session-handson/models/step-description';
import { SessionTemplateComponent } from './../../../shared/templates/session-template/session-template.component';

/**
 * Angular 第一課元件
 */
@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.less']
})
export class Session1Component
  extends SessionTemplateComponent
  implements OnInit, AfterViewInit {

  public sessionTags: SessionCategory[] = [
    { title: 'HTML', color: '#DE4B25' },
    { title: 'CSS', color: '#0396DE' },
    { title: 'Javascript', color: '#E9D54D' },
    { title: 'Typescript', color: '#007ACC' },
    { title: 'Angular', color: '#D70030' }
  ];
  public sessionStep: StepDescription[] = [
    { title: '步驟一', subtitle: '1 min', description: '創建Component' },
    { title: '步驟二', subtitle: '10 min', description: '檢視Component' },
    { title: '結果', subtitle: '10 min', description: '觀看生成後的結果' },
    { title: '生命週期', subtitle: '10 min', description: 'Component 生命週期' }
  ];
  public perfectScrollbarConfig: PerfectScrollbarConfigInterface = {};

  /**
   * @param elementRef 元素參照
   */
  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    super(elementRef);
  }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit() {
  }

  /**
   * View內容初始化
   *
   * @method public
   */
  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

}
