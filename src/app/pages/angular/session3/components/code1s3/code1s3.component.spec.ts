/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s3Component } from './code1s3.component';

describe('Code1s3Component', () => {
  let component: Code1s3Component;
  let fixture: ComponentFixture<Code1s3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
