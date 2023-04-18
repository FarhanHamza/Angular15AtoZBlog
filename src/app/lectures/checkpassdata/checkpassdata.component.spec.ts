import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpassdataComponent } from './checkpassdata.component';

describe('CheckpassdataComponent', () => {
  let component: CheckpassdataComponent;
  let fixture: ComponentFixture<CheckpassdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpassdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckpassdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
