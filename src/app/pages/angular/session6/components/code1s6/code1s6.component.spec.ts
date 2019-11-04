/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s6Component } from './code1s6.component';

describe('Code1s6Component', () => {
  let component: Code1s6Component;
  let fixture: ComponentFixture<Code1s6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
