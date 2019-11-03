/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ws03Component } from './ws03.component';

describe('Ws03Component', () => {
  let component: Ws03Component;
  let fixture: ComponentFixture<Ws03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ws03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ws03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
