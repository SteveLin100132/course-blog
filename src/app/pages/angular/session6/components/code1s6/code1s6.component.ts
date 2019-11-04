/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： 第六章第一部分元件
 * @CREATE Mon Nov 04 2019 下午11:30:14
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { CodeProvider } from './../../../../../core/services/code-provider.service';

/**
 * 第六章第一部分元件
 */
@Component({
  selector: 'app-code1s6',
  templateUrl: './code1s6.component.html',
  styleUrls: ['./code1s6.component.less']
})
export class Code1s6Component implements OnInit, AfterViewInit {

  public code: string[] = [];
  public loading = true;

  /**
   * @param router       路由功能
   * @param codeProvider Code提供者
   */
  constructor(
    private router: Router,
    private codeProvider: CodeProvider
  ) { }

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
    const path1 = './../../../../assets/docs/angular/session6/code-001.txt';
    const path2 = './../../../../assets/docs/angular/session6/code-002.txt';
    const path3 = './../../../../assets/docs/angular/session6/code-003.txt';
    this.code.push(await this.codeProvider.getCode(path1).toPromise());
    this.code.push(await this.codeProvider.getCode(path2).toPromise());
    this.code.push(await this.codeProvider.getCode(path3).toPromise());
    this.loading = false;
  }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 結果預覽
   * ---------------------------------------------------------------------------
   */

  /**
   * 跳轉到Session 2
   *
   * @method public
   */
  public jumpSession2(): void {
    this.router.navigate(['/angular/session2']);
  }

}
