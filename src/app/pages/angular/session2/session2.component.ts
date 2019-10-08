/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular 第二課元件
 * @CREATE Sunday, 6th October 2019 11:34:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit, Inject, ElementRef } from '@angular/core';

import { SessionCategory } from './../../../shared/templates/session-description/models/session-category';
import { StepDescription } from './../../../shared/templates/session-handson/models/step-description';
import { SessionTemplateComponent } from './../../../shared/templates/session-template/session-template.component';

/**
 * Angular 第二課元件
 */
@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.less']
})
export class Session2Component
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
    { title: 'Interpolation', subtitle: '10 min', description: '差值綁定' },
    { title: 'Property Binding', subtitle: '10 min', description: '屬性綁定' },
    { title: 'Event Binding', subtitle: '10 min', description: '事件綁定' },
    { title: 'Two-way Binding', subtitle: '10 min', description: '雙向綁定' },
    { title: 'Template Variable', subtitle: '10 min', description: '樣本變數' }
  ];

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
