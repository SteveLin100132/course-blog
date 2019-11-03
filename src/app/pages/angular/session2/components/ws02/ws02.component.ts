/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第二單元練習
 * @CREATE Sunday, 3rd November 2019 8:58:31 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

/**
 * 第二單元練習
 */
@Component({
  selector: 'app-ws02',
  templateUrl: './ws02.component.html',
  styleUrls: ['./ws02.component.less']
})
export class Ws02Component implements OnInit {

  public text = 'This is a test.';
  public show = false;

  constructor() { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * Event Binding練習
   *
   * @method public
   */
  public toggle(): void {
    this.show = !this.show;
  }

}
