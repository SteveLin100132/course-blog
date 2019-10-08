/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s1Component } from './code1s1.component';

describe('Code1s1Component', () => {
  let component: Code1s1Component;
  let fixture: ComponentFixture<Code1s1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
