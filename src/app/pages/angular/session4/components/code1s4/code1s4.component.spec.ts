/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s4Component } from './code1s4.component';

describe('Code1s4Component', () => {
  let component: Code1s4Component;
  let fixture: ComponentFixture<Code1s4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
