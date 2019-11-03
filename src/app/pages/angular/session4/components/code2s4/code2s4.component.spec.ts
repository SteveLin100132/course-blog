/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code2s4Component } from './code2s4.component';

describe('Code2s4Component', () => {
  let component: Code2s4Component;
  let fixture: ComponentFixture<Code2s4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code2s4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code2s4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
