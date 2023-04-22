import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHeaderComponent } from './skill-header.component';

describe('SkillHeaderComponent', () => {
  let component: SkillHeaderComponent;
  let fixture: ComponentFixture<SkillHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
