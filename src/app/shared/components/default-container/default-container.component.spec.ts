import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContainerComponent } from './default-container.component';

describe('DefaultContainerComponent', () => {
  let component: DefaultContainerComponent;
  let fixture: ComponentFixture<DefaultContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultContainerComponent]
    });
    fixture = TestBed.createComponent(DefaultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
