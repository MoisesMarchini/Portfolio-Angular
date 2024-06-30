import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesBlockComponent } from './languages.component';

describe('LanguagesComponent', () => {
  let component: LanguagesBlockComponent;
  let fixture: ComponentFixture<LanguagesBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagesBlockComponent],
    });
    fixture = TestBed.createComponent(LanguagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
