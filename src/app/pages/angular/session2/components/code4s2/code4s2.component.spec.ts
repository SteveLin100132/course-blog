/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code4s2Component } from './code4s2.component';

describe('Code4s2Component', () => {
  let component: Code4s2Component;
  let fixture: ComponentFixture<Code4s2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code4s2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code4s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
