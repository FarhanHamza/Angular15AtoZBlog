import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylesrule14Component } from './stylesrule14.component';

describe('Stylesrule14Component', () => {
  let component: Stylesrule14Component;
  let fixture: ComponentFixture<Stylesrule14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stylesrule14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylesrule14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
