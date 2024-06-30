import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeBlockComponent } from './dark-mode.component';

describe('DarkModeComponent', () => {
  let component: DarkModeBlockComponent;
  let fixture: ComponentFixture<DarkModeBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkModeBlockComponent],
    });
    fixture = TestBed.createComponent(DarkModeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
