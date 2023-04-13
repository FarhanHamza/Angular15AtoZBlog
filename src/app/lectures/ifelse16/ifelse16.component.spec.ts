import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifelse16Component } from './ifelse16.component';

describe('Ifelse16Component', () => {
  let component: Ifelse16Component;
  let fixture: ComponentFixture<Ifelse16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ifelse16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifelse16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
