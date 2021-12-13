import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route22Component } from './route22.component';

describe('Route22Component', () => {
  let component: Route22Component;
  let fixture: ComponentFixture<Route22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
