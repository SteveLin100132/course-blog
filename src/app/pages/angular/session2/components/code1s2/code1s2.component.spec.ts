/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s2Component } from './code1s2.component';

describe('Code1s2Component', () => {
  let component: Code1s2Component;
  let fixture: ComponentFixture<Code1s2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
