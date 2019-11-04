/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code2s5Component } from './code2s5.component';

describe('Code2s5Component', () => {
  let component: Code2s5Component;
  let fixture: ComponentFixture<Code2s5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2s5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2s5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
