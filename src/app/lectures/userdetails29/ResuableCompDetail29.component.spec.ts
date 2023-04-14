import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResuableCompDetail29Component } from './ResuableCompDetail29.component';



describe('ResuableCompDetail29Component', () => {
  let component: ResuableCompDetail29Component;
  let fixture: ComponentFixture<ResuableCompDetail29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuableCompDetail29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuableCompDetail29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
