/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code3s2Component } from './code3s2.component';

describe('Code3s2Component', () => {
  let component: Code3s2Component;
  let fixture: ComponentFixture<Code3s2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code3s2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code3s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
