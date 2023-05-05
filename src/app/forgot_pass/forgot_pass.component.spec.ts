/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Forgot_passComponent } from './forgot_pass.component';

describe('Forgot_passComponent', () => {
  let component: Forgot_passComponent;
  let fixture: ComponentFixture<Forgot_passComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forgot_passComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgot_passComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
