import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temprefvar32Component } from './temprefvar32.component';

describe('Temprefvar32Component', () => {
  let component: Temprefvar32Component;
  let fixture: ComponentFixture<Temprefvar32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temprefvar32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temprefvar32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
