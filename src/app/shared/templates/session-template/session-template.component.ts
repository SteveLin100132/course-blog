/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程範本元件
 * @CREATE Sunday, 6th October 2019 8:05:19 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

import * as $ from 'jquery';

import { SessionCategory } from './../session-description/models/session-category';
import { StepDescription } from './../session-handson/models/step-description';

/**
 * 課程範本元件
 */
@Component({
  selector: 'app-session-template',
  templateUrl: './session-template.component.html',
  styleUrls: ['./session-template.component.less']
})
export class SessionTemplateComponent implements OnInit, AfterViewInit {

  protected codeViewHeight = 0;

  public sessionTags: SessionCategory[] = [];
  public sessionStep: StepDescription[] = [];

  /**
   * @param elementRef 元素參照
   */
  constructor(private elementRef: ElementRef) { }

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
    this.initPracticePanel();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 樣式
   * ---------------------------------------------------------------------------
   */

  /**
   * 初始化實際演練面板樣式
   *
   * @method protected
   */
  protected initPracticePanel(): void {
    const container = $(this.elementRef.nativeElement).find('.container');
    const containerHeight = container.height();
    const descriptionHeight = container
      .find('.description-panel .session-description')
      .height();
    container.css({
      '--tutorial-height': containerHeight - descriptionHeight - 24 + 'px',
      '--ps-max-height': containerHeight - descriptionHeight - 24 - 150 - 105 + 'px'
    });
  }

}
