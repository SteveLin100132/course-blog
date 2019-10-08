/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code5s2Component } from './code5s2.component';

describe('Code5s2Component', () => {
  let component: Code5s2Component;
  let fixture: ComponentFixture<Code5s2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code5s2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code5s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
