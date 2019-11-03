/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Result2s4Component } from './result2s4.component';

describe('Result2s4Component', () => {
  let component: Result2s4Component;
  let fixture: ComponentFixture<Result2s4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result2s4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result2s4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
