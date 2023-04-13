import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matui26Component } from './matui26.component';

describe('Matui26Component', () => {
  let component: Matui26Component;
  let fixture: ComponentFixture<Matui26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matui26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matui26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
