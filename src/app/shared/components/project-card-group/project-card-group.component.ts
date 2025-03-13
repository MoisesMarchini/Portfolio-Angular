import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/environments/projects';

@Component({
  selector: 'project-card-group',
  templateUrl: './project-card-group.component.html',
  styleUrls: ['./project-card-group.component.scss']
})
export class ProjectCardGroupComponent {
  @Input() projects: ProjectModel[] = [];
  @Input() groupName?: string;
  @Input() groupIcon?: string;
  @Input() canExpand: boolean = true;
  expand: boolean = true;

  toggleExpand() {
    if (!this.canExpand) return;

    this.expand = !this.expand;
  }
}
