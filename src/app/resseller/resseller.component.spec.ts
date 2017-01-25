/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RessellerComponent } from './resseller.component';

describe('RessellerComponent', () => {
  let component: RessellerComponent;
  let fixture: ComponentFixture<RessellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
