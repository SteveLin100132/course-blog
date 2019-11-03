/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Session3Component } from './session3.component';

describe('Session3Component', () => {
  let component: Session3Component;
  let fixture: ComponentFixture<Session3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Session3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Session3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
