import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsPageComponent {
  projects = environment.projects;
}
