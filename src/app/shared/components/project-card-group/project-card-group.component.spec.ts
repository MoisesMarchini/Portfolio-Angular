import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardGroupComponent } from './project-card-group.component';

describe('ProjectCardGroupComponent', () => {
  let component: ProjectCardGroupComponent;
  let fixture: ComponentFixture<ProjectCardGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardGroupComponent]
    });
    fixture = TestBed.createComponent(ProjectCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
