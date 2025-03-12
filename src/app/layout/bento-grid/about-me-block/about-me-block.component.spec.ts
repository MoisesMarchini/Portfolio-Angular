import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeBlockComponent } from './about-me-block.component';

describe('AboutMeBlockComponent', () => {
  let component: AboutMeBlockComponent;
  let fixture: ComponentFixture<AboutMeBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeBlockComponent]
    });
    fixture = TestBed.createComponent(AboutMeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
