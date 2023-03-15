/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepDilogComponent } from './DepDilog.component';

describe('DepDilogComponent', () => {
  let component: DepDilogComponent;
  let fixture: ComponentFixture<DepDilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepDilogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
