/**
 * 專案名稱： course-blog
 * 部門代號： ML8100
 * 檔案說明： Code標註
 * @CREATE Sunday, 6th October 2019 8:23:42 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import shell from 'highlight.js/lib/languages/shell';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/htmlbars';
import less from 'highlight.js/lib/languages/less';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

/**
 * Code標註
 */
export function codeHightlightProvider() {
  return [
    { name: 'shell', func: shell },
    { name: 'html', func: html },
    { name: 'css', func: css },
    { name: 'less', func: less },
    { name: 'javascript', func: javascript },
    { name: 'typescript', func: typescript }
  ];
}
