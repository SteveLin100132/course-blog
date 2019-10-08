/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code2s2Component } from './code2s2.component';

describe('Code2s2Component', () => {
  let component: Code2s2Component;
  let fixture: ComponentFixture<Code2s2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2s2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
