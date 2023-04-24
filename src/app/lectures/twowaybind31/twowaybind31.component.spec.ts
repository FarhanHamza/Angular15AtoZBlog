import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaybind31Component } from './twowaybind31.component';

describe('Twowaybind31Component', () => {
  let component: Twowaybind31Component;
  let fixture: ComponentFixture<Twowaybind31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twowaybind31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twowaybind31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
