/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Session6Component } from './session6.component';

describe('Session6Component', () => {
  let component: Session6Component;
  let fixture: ComponentFixture<Session6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Session6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Session6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
