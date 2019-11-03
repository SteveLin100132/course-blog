/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第四單元練習
 * @CREATE Sunday, 3rd November 2019 8:58:31 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 第四單元練習
 */
@Component({
  selector: 'app-ws04',
  templateUrl: './ws04.component.html',
  styleUrls: ['./ws04.component.less']
})
export class Ws04Component implements OnInit {

  @Output() multipleResult = new EventEmitter<number>();

  @Input() value: number;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * 將輸入參數乘上10倍並送出
   *
   * @method public
   */
  public multiple(): void {
    this.multipleResult.emit(this.value * 10);
  }

}
