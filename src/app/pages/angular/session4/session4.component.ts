/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Angular 第四課元件
 * @CREATE Sunday, 3rd November 2019 9:47:22 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit, Inject, ElementRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { SessionCategory } from './../../../shared/templates/session-description/models/session-category';
import { StepDescription } from './../../../shared/templates/session-handson/models/step-description';
import { SessionTemplateComponent } from './../../../shared/templates/session-template/session-template.component';

/**
 * Angular 第四課元件
 */
@Component({
  selector: 'app-session4',
  templateUrl: './session4.component.html',
  styleUrls: ['./session4.component.less']
})
export class Session4Component
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
    { title: '@Input', subtitle: '10 min', description: '傳入參數' },
    { title: '@Output', subtitle: '10 min', description: '輸出參數' },
    { title: '練習', subtitle: '10 min', description: '實際演練' }
  ];

  /**
   * @param elementRef       元素參照
   * @param nzMessageService 全局提示服務
   */
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    private nzMessageService: NzMessageService
  ) {
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

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 練習結果
   * ---------------------------------------------------------------------------
   */

  /**
   * 顯示練習結果
   *
   * @method public
   * @param value 子Component輸出參數
   */
  public showResult(value: number): void {
    this.nzMessageService.info(value.toString());
  }

}
