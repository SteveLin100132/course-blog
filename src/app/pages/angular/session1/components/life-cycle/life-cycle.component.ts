/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 生命週期示例元件
 * @CREATE Tuesday, 8th October 2019 9:53:50 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

/**
 * 生命週期示例元件
 */
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.less']
})
export class LifeCycleComponent implements OnInit {

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
