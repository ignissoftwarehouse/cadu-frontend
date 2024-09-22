/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TensionOutComponent } from './tension-out.component';

describe('TensionOutComponent', () => {
  let component: TensionOutComponent;
  let fixture: ComponentFixture<TensionOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensionOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensionOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
