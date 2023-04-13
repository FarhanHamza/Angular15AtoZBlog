import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchcase18Component } from './switchcase18.component';

describe('Switchcase18Component', () => {
  let component: Switchcase18Component;
  let fixture: ComponentFixture<Switchcase18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Switchcase18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchcase18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
