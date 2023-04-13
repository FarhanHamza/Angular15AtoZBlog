import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngbootstrap25Component } from './ngbootstrap25.component';

describe('Ngbootstrap25Component', () => {
  let component: Ngbootstrap25Component;
  let fixture: ComponentFixture<Ngbootstrap25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngbootstrap25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngbootstrap25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
