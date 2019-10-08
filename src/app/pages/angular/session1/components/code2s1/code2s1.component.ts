/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第一章第二部分元件
 * @CREATE Sunday, 6th October 2019 11:07:54 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from 'src/app/core/services/code-provider.service';

/**
 * 第一章第二部分元件
 */
@Component({
  selector: 'app-code2s1',
  templateUrl: './code2s1.component.html',
  styleUrls: ['./code2s1.component.less']
})
export class Code2s1Component implements OnInit, AfterViewInit {

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
    const path1 = './../../../../assets/docs/angular/session1/code-002.txt';
    const path2 = './../../../../assets/docs/angular/session1/code-003.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

}
