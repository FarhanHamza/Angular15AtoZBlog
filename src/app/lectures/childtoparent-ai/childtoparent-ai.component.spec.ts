import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoparentAIComponent } from './childtoparent-ai.component';

describe('ChildtoparentAIComponent', () => {
  let component: ChildtoparentAIComponent;
  let fixture: ComponentFixture<ChildtoparentAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildtoparentAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildtoparentAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
