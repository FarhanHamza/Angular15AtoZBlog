import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todolist27Component } from './todolist27.component';

describe('Todolist27Component', () => {
  let component: Todolist27Component;
  let fixture: ComponentFixture<Todolist27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todolist27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todolist27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
