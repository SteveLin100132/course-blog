/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第三章第三部分元件
 * @CREATE Sunday, 3rd November 2019 9:33:08 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第三章第三部分元件
 */
@Component({
  selector: 'app-code3s3',
  templateUrl: './code3s3.component.html',
  styleUrls: ['./code3s3.component.less']
})
export class Code3s3Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;
  public condition = 'a';

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
    const path1 = './../../../../assets/docs/angular/session3/code-005.txt';
    const path2 = './../../../../assets/docs/angular/session3/code-006.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

}
