/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Side_navComponent } from './side_nav.component';

describe('Side_navComponent', () => {
  let component: Side_navComponent;
  let fixture: ComponentFixture<Side_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
