/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Code1s5Component } from './code1s5.component';

describe('Code1s5Component', () => {
  let component: Code1s5Component;
  let fixture: ComponentFixture<Code1s5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Code1s5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Code1s5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
