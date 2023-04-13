import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertybind15Component } from './propertybind15.component';

describe('Propertybind15Component', () => {
  let component: Propertybind15Component;
  let fixture: ComponentFixture<Propertybind15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Propertybind15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propertybind15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
