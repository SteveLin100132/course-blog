/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ws02Component } from './ws02.component';

describe('Ws02Component', () => {
  let component: Ws02Component;
  let fixture: ComponentFixture<Ws02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ws02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ws02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
