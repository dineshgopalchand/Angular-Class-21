import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableComponent } from './resuable.component';

describe('ResuableComponent', () => {
  let component: ResuableComponent;
  let fixture: ComponentFixture<ResuableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
