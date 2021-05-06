import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableDemoComponent } from './resuable-demo.component';

describe('ResuableDemoComponent', () => {
  let component: ResuableDemoComponent;
  let fixture: ComponentFixture<ResuableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuableDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
