import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylebinding21Component } from './stylebinding21.component';

describe('Stylebinding21Component', () => {
  let component: Stylebinding21Component;
  let fixture: ComponentFixture<Stylebinding21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stylebinding21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylebinding21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
