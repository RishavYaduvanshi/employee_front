/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Email_forgotComponent } from './email_forgot.component';

describe('Email_forgotComponent', () => {
  let component: Email_forgotComponent;
  let fixture: ComponentFixture<Email_forgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Email_forgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Email_forgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
