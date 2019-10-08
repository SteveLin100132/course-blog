/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第二章第四部分元件
 * @CREATE Monday, 7th October 2019 9:51:21 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第二章第四部分元件
 */
@Component({
  selector: 'app-code4s2',
  templateUrl: './code4s2.component.html',
  styleUrls: ['./code4s2.component.less']
})
export class Code4s2Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;
  public name = 'Steve';

  /**
   * @param codeProvider     Code提供者
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
    const path1 = './../../../../assets/docs/angular/session2/code-007.txt';
    const path2 = './../../../../assets/docs/angular/session2/code-008.txt';
    const path3 = './../../../../assets/docs/angular/session2/code-009.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.code.push(await this.codeProvider.getCode(path3).toPromise());
    this.loading = false;
  }

}
