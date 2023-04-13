import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nestedforloop20Component } from './nestedforloop20.component';

describe('Nestedforloop20Component', () => {
  let component: Nestedforloop20Component;
  let fixture: ComponentFixture<Nestedforloop20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nestedforloop20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nestedforloop20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
