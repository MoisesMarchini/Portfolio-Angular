import { Component, HostBinding } from '@angular/core';
import { ProjectCard } from 'src/app/components/grid-cards/grid-cards.component';
import { environment } from 'src/app/environments/environment';
import { fadeInOutAnimation } from '../../animations/fade-in-out.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeInOutAnimation]
})
export class ProjectsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  projects: ProjectCard[] = environment.projects;

}
