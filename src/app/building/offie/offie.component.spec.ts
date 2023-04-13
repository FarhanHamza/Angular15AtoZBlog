import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffieComponent } from './offie.component';

describe('OffieComponent', () => {
  let component: OffieComponent;
  let fixture: ComponentFixture<OffieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
