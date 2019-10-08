/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： App主元件
 * @CREATE Sunday, 6th October 2019 1:26:52 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit } from '@angular/core';

/**
 * App主元件
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public isCollapsed = false;
  public drawerShowed = false;

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * ---------------------------------------------------------------------------
   * 頁面設定
   * ---------------------------------------------------------------------------
   */

  /**
   * 開啟設定欄位
   *
   * @method public
   */
  public openDrawer(): void {
    this.drawerShowed = true;
  }

  /**
   * 關閉設定欄位
   *
   * @method public
   */
  public closeDrawer(): void {
    this.drawerShowed = false;
  }

}
