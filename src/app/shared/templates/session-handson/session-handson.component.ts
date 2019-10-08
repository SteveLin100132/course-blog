/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程實際演練元件
 * @CREATE Sunday, 6th October 2019 4:37:11 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, ContentChild, ElementRef, Input } from '@angular/core';

import { StepDescription } from './models/step-description';

/**
 * 課程實際演練元件
 */
@Component({
  selector: 'app-session-handson',
  templateUrl: './session-handson.component.html',
  styleUrls: ['./session-handson.component.less']
})
export class SessionHandsonComponent implements OnInit {

  @ContentChild('step1', { read: null, static: true })
  stepContent1: ElementRef;
  @ContentChild('step2', { read: null, static: true })
  stepContent2: ElementRef;
  @ContentChild('step3', { read: null, static: true })
  stepContent3: ElementRef;
  @ContentChild('step4', { read: null, static: true })
  stepContent4: ElementRef;
  @ContentChild('step5', { read: null, static: true })
  stepContent5: ElementRef;
  @ContentChild('step6', { read: null, static: true })
  stepContent6: ElementRef;

  @Input() stepDescription: StepDescription[] = [];

  public step = 0;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 演練進度
   * ---------------------------------------------------------------------------
   */

  /**
   * 當演練的進度變化時
   *
   * @method public
   * @param step 演練的進度
   */
  public onStepChanged(step: number): void {
    this.step = step;
  }

}
