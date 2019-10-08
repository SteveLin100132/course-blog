/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第二章第一部分元件
 * @CREATE Monday, 7th October 2019 9:13:03 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第二章第一部分元件
 */
@Component({
  selector: 'app-code1s2',
  templateUrl: './code1s2.component.html',
  styleUrls: ['./code1s2.component.less']
})
export class Code1s2Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;

  /**
   * @param codeProvider Code提供者
   */
  constructor(private codeProvider: CodeProvider) { }

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
  }

  /**
   * View內容初始化
   *
   * @method public
   */
  public ngAfterViewInit(): void {
    this.getCode();
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE Code
   * ---------------------------------------------------------------------------
   */

  /**
   * 取得所有課程需要的Code
   *
   * @method public
   */
  public async getCode() {
    const path1 = './../../../../assets/docs/angular/session2/code-001.txt';
    const path2 = './../../../../assets/docs/angular/session2/code-002.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

}
