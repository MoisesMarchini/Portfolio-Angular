import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlockComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectBlockComponent;
  let fixture: ComponentFixture<ProjectBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBlockComponent],
    });
    fixture = TestBed.createComponent(ProjectBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
