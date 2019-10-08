/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 課程介紹元件
 * @CREATE Sunday, 6th October 2019 3:54:50 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input } from '@angular/core';

import { SessionCategory } from './models/session-category';

/**
 * 課程介紹元件
 */
@Component({
  selector: 'app-session-description',
  templateUrl: './session-description.component.html',
  styleUrls: ['./session-description.component.less']
})
export class SessionDescriptionComponent implements OnInit {

  @Input() name = 'T1';
  @Input() title = 'Session Title';
  @Input() categories: SessionCategory[] = [{ title: 'Tag', color: '#D70030' }];
  @Input() introduction = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  @Input() difficulty = 2.5;
  @Input() usefulness = 2.5;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
