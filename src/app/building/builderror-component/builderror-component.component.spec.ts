import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderrorComponentComponent } from './builderror-component.component';

describe('BuilderrorComponentComponent', () => {
  let component: BuilderrorComponentComponent;
  let fixture: ComponentFixture<BuilderrorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderrorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
