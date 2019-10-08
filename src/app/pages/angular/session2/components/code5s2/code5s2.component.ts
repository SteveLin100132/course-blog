/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第二章第五部分元件
 * @CREATE Tuesday, 8th October 2019 10:18:47 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */


import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第二章第五部分元件
 */
@Component({
  selector: 'app-code5s2',
  templateUrl: './code5s2.component.html',
  styleUrls: ['./code5s2.component.less']
})
export class Code5s2Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;
  public printedCode = '';

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
    const path1 = './../../../../assets/docs/angular/session2/code-010.txt';
    const path2 = './../../../../assets/docs/angular/session2/code-011.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

  /**
   * 印出輸入欄位的資料
   *
   * @method public
   * @param textfield 輸入欄位元件
   */
  public printCode(textfield: HTMLInputElement): void {
    this.printedCode += `$ ${textfield.value}\n`;
  }

}
