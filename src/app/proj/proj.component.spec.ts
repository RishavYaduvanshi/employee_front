/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjComponent } from './proj.component';

describe('ProjComponent', () => {
  let component: ProjComponent;
  let fixture: ComponentFixture<ProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
