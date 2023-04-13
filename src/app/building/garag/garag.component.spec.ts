import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragComponent } from './garag.component';

describe('GaragComponent', () => {
  let component: GaragComponent;
  let fixture: ComponentFixture<GaragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
