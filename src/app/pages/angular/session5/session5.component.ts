/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular 第五課元件
 * @CREATE Sunday, 3rd November 2019 10:36:59 pm
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
 * Angular 第五課元件
 */
@Component({
  selector: 'app-session5',
  templateUrl: './session5.component.html',
  styleUrls: ['./session5.component.less']
})
export class Session5Component
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
    { title: 'Template Driven', subtitle: '10 min', description: 'Template Driven Form' },
    { title: 'Reactive', subtitle: '10 min', description: 'Reactive Form' }
  ];

  /**
   * @param elementRef       元素參照
   * @param nzMessageService 全局提示服務
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
