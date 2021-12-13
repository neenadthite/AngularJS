import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route12Component } from './route12.component';

describe('Route12Component', () => {
  let component: Route12Component;
  let fixture: ComponentFixture<Route12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
