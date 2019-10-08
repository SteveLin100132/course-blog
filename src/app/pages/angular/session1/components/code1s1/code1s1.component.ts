/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第一章第一部分元件
 * @CREATE Sunday, 6th October 2019 10:06:21 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第一章第一部分元件
 */
@Component({
  selector: 'app-code1s1',
  templateUrl: './code1s1.component.html',
  styleUrls: ['./code1s1.component.less']
})
export class Code1s1Component implements OnInit, AfterViewInit {

  public perfectScrollbarConfig: PerfectScrollbarConfigInterface = {};
  public code: string[] = [];
  public loading = true;
  public nodes = [
    {
      title: ' hello-world',
      expanded: true,
      children: [
        { title: ' hello-world.component.html', isLeaf: true },
        { title: ' hello-world.component.css', isLeaf: true },
        { title: ' hello-world.component.spec.ts', isLeaf: true },
        { title: ' hello-world.component.ts', isLeaf: true }
      ]
    }
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
    const path = './../../../../assets/docs/angular/session1/code-001.txt';
    this.code.push(await this.codeProvider.getCode(path).toPromise());
    this.loading = false;
  }

}
