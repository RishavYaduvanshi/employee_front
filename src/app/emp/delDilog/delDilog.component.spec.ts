/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DelDilogComponent } from './delDilog.component';

describe('DelDilogComponent', () => {
  let component: DelDilogComponent;
  let fixture: ComponentFixture<DelDilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelDilogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
