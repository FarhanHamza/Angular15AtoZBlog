import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfor19Component } from './ngfor19.component';

describe('Ngfor19Component', () => {
  let component: Ngfor19Component;
  let fixture: ComponentFixture<Ngfor19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngfor19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngfor19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
