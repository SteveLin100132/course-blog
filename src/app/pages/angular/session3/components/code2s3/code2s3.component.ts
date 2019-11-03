/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第三章第二部分元件
 * @CREATE Sunday, 3rd November 2019 9:27:34 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第三章第二部分元件
 */
@Component({
  selector: 'app-code2s3',
  templateUrl: './code2s3.component.html',
  styleUrls: ['./code2s3.component.less']
})
export class Code2s3Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;
  public items = [
    { name: 'Item1', value: '1' },
    { name: 'Item2', value: '2' },
    { name: 'Item3', value: '3' },
    { name: 'Item4', value: '4' },
    { name: 'Item5', value: '5' }
  ];

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
    const path1 = './../../../../assets/docs/angular/session3/code-003.txt';
    const path2 = './../../../../assets/docs/angular/session3/code-004.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.loading = false;
  }

}
