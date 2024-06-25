import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ProjectModel } from 'src/app/environments/projects';

@Component({
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  subscription?: Subscription;
  projectName = '';
  project?: ProjectModel;

  similarProjects: ProjectModel[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.projectName = params['id'];
      this.loadProject();
    });
  }

  private loadProject() {
    this.similarProjects = [];

    this.project = environment.projects.find((project) => {
      const projectRoute = environment.getProjectRoute(project);

      return projectRoute === this.projectName;
    });

    setTimeout(() => {
      this.similarProjects = this.loadSimilarProjects();
    });
  }

  private loadSimilarProjects() {
    const tags = this.project?.tags;
    const similarProjects = environment.projects
      .filter(
        (project) =>
          project.title !== this.project?.title &&
          project.tags.some((tag) =>
            tags?.some((_tag) => _tag.title === tag.title)
          )
      )
      .slice(0, 4);

    return similarProjects;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
