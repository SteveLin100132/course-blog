/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ws04Component } from './ws04.component';

describe('Ws04Component', () => {
  let component: Ws04Component;
  let fixture: ComponentFixture<Ws04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ws04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ws04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
