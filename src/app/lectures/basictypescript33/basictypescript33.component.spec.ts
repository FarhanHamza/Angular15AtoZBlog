import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basictypescript33Component } from './basictypescript33.component';

describe('Basictypescript33Component', () => {
  let component: Basictypescript33Component;
  let fixture: ComponentFixture<Basictypescript33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basictypescript33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basictypescript33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
