/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SsdComponent } from './ssd.component';

describe('SsdComponent', () => {
  let component: SsdComponent;
  let fixture: ComponentFixture<SsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
