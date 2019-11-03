/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code3s3Component } from './code3s3.component';

describe('Code3s3Component', () => {
  let component: Code3s3Component;
  let fixture: ComponentFixture<Code3s3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code3s3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code3s3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
