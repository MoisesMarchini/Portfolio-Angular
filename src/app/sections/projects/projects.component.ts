import { Component } from '@angular/core';
import { ProjectCard } from 'src/app/components/grid-cards/grid-cards.component';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectCard[] = environment.projects;

}
