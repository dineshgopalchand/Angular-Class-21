import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedPipeComponent } from './predefined-pipe.component';

describe('PredefinedPipeComponent', () => {
  let component: PredefinedPipeComponent;
  let fixture: ComponentFixture<PredefinedPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredefinedPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
