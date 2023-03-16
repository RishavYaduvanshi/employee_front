/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepDelDilogComponent } from './DepDelDilog.component';

describe('DepDelDilogComponent', () => {
  let component: DepDelDilogComponent;
  let fixture: ComponentFixture<DepDelDilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepDelDilogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepDelDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
