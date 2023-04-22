import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkDotNetComponent } from './sk-dot-net.component';

describe('SkDotNetComponent', () => {
  let component: SkDotNetComponent;
  let fixture: ComponentFixture<SkDotNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkDotNetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkDotNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
