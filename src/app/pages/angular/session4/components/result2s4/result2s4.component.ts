/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第四章第二部分元件結果預覽
 * @CREATE Sunday, 3rd November 2019 10:12:16 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * 第四章第二部分元件結果預覽
 */
@Component({
  selector: 'app-result2s4',
  templateUrl: './result2s4.component.html',
  styleUrls: ['./result2s4.component.less']
})
export class Result2s4Component implements OnInit {

  @Output() trigger = new EventEmitter<number>();

  public value: number;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * 送出Output參數
   *
   * @method public
   */
  public send(): void {
    this.trigger.emit(this.value);
  }

}
