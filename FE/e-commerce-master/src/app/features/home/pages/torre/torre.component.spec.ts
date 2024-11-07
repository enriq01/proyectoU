/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TorreComponent } from './torre.component';

describe('TorreComponent', () => {
  let component: TorreComponent;
  let fixture: ComponentFixture<TorreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
