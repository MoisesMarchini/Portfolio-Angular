import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/environments/projects';
import { BlockComponent } from '../block/block.component';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'project-block',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent extends BlockComponent {
  @Input() project?: ProjectModel;

  contentStyles = '';
  projectRoute = '';

  get darkMode() {
    return environment.darkMode;
  }

  ngOnInit() {
    this.extendedClassNames = this.loadExtendedClassNames();
    this.contentStyles = this.getContentStyles();
    this.projectRoute = this.getProjectRoute();
  }

  getProjectRoute() {
    const projectsRoute = '/projects/';
    if (!this.project) return projectsRoute;

    return projectsRoute + environment.getProjectRoute(this.project);
  }

  private loadExtendedClassNames() {
    return `p-0 flex flex-col col-span-12 md:col-span-6 row-span-2 min-h-64 overflow-hidden${
      this.project == undefined ? 'hidden' : ''
    }`;
  }

  private getContentStyles() {
    return `--_bg-color: rgb(39, 39, 42,.5);
    background-image: url(${this.project?.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;`;
  }
}
