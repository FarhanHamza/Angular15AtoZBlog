import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getinputboxvalue12Component } from './getinputboxvalue12.component';

describe('Getinputboxvalue12Component', () => {
  let component: Getinputboxvalue12Component;
  let fixture: ComponentFixture<Getinputboxvalue12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Getinputboxvalue12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getinputboxvalue12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
