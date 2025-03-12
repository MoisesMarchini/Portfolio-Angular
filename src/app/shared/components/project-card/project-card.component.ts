import { Component, HostListener, Input } from '@angular/core';
import { freelancerProjects, ProjectModel } from 'src/app/environments/projects';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() model: ProjectModel = freelancerProjects[0];
  isHovering = false;

  @HostListener('pointerenter')
  onHover() {
    this.isHovering = true;
  }

  @HostListener('pointerleave')
  onBlur() {
    this.isHovering = false;
  }
}
