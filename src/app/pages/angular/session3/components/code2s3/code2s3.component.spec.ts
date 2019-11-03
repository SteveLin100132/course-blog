/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code2s3Component } from './code2s3.component';

describe('Code2s3Component', () => {
  let component: Code2s3Component;
  let fixture: ComponentFixture<Code2s3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2s3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2s3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
