import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route21Component } from './route21.component';

describe('Route21Component', () => {
  let component: Route21Component;
  let fixture: ComponentFixture<Route21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
