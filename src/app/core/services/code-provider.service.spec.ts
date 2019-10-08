/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodeProvider } from './code-provider.service';

describe('Service: CodeProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeProvider]
    });
  });

  it('should ...', inject([CodeProvider], (service: CodeProvider) => {
    expect(service).toBeTruthy();
  }));
});
