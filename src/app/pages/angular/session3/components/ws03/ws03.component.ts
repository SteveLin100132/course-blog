/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第三單元練習
 * @CREATE Sunday, 3rd November 2019 9:37:51 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

/**
 * 第三單元練習
 */
@Component({
  selector: 'app-ws03',
  templateUrl: './ws03.component.html',
  styleUrls: ['./ws03.component.less']
})
export class Ws03Component implements OnInit {

  public items = [1, 2, 3, 4, 5];

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

}
