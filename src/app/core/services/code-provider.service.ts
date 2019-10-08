/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Code提供者
 * @CREATE Sunday, 6th October 2019 8:59:16 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Code提供者
 */
@Injectable({
  providedIn: 'root'
})
export class CodeProvider {

  /**
   * @param http HTTP請求
   */
  constructor(private http: HttpClient) { }

  /**
   * ---------------------------------------------------------------------------
   * @NOTE 取得Code
   * ---------------------------------------------------------------------------
   */

  /**
   * 取得Code內容
   *
   * @method public
   * @param path Code存放路徑
   * @return 回傳一個Observable，讓呼叫者可以取得Code內容
   */
  public getCode(path: string): Observable<string> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(path, { headers, responseType: 'text' });
  }

}
