/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code2s1Component } from './code2s1.component';

describe('Code2s1Component', () => {
  let component: Code2s1Component;
  let fixture: ComponentFixture<Code2s1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2s1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2s1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
