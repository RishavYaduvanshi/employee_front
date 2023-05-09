/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Email_verifiedComponent } from './email_verified.component';

describe('Email_verifiedComponent', () => {
  let component: Email_verifiedComponent;
  let fixture: ComponentFixture<Email_verifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Email_verifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Email_verifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
