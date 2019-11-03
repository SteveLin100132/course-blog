/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第四章第二部分元件
 * @CREATE Sunday, 3rd November 2019 10:00:54 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第四章第二部分元件
 */
@Component({
  selector: 'app-code2s4',
  templateUrl: './code2s4.component.html',
  styleUrls: ['./code2s4.component.less']
})
export class Code2s4Component implements OnInit, AfterViewInit {

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
    const path1 = './../../../../assets/docs/angular/session4/code-004.txt';
    const path2 = './../../../../assets/docs/angular/session4/code-005.txt';
    const path3 = './../../../../assets/docs/angular/session4/code-006.txt';
    const path4 = './../../../../assets/docs/angular/session4/code-007.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.code.push(await this.codeProvider.getCode(path3).toPromise());
    this.code.push(await this.codeProvider.getCode(path4).toPromise());
    this.loading = false;
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 範例
   * ---------------------------------------------------------------------------
   */

  /**
   * 範例Output結果預覽
   *
   * @method public
   * @param value 子Component送出的參數
   */
  public getChildValue(value: number): void {
    alert(value);
  }

}
