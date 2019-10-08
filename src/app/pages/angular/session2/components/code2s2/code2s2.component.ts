/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第二章第二部分元件
 * @CREATE Monday, 7th October 2019 9:22:41 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第二章第二部分元件
 */
@Component({
  selector: 'app-code2s2',
  templateUrl: './code2s2.component.html',
  styleUrls: ['./code2s2.component.less']
})
export class Code2s2Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;
  public imageSource = 'https://www.geberconsulting.com/images/2018/07/20/clients-logo-size_-1-35.jpg';

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
    const path1 = './../../../../assets/docs/angular/session2/code-003.txt';
    const path2 = './../../../../assets/docs/angular/session2/code-004.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

}
