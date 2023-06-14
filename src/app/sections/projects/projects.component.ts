import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentProjectIndex = 0;
  fullScreenProjectIndex = -1;

  projects = [0, 1, 2, 3, 4]

  private throttleTime = 800; // Tempo em milissegundos (1 segundo)
  private lastWheelEventTime = 0;

  ngOnInit(): void {
  }

  handleMouseWheel(event: WheelEvent) {
    const currentTime = Date.now();
    const timeSinceLastEvent = currentTime - this.lastWheelEventTime;

    if (timeSinceLastEvent < this.throttleTime)
      return;

    const deltaX = event.deltaY;
    const prev = Math.max(this.currentProjectIndex - 1, 0);
    const next = Math.min(this.currentProjectIndex + 1, this.projects.length -1);
    const projectDefaultId = 'project-';

    if (deltaX !== 0)
      event.preventDefault();


    this.currentProjectIndex = deltaX > 0? next : prev;
    this.ScrollToProject();

    this.lastWheelEventTime = currentTime;
  }


  OnClickProject(index: number) {
    if (this.currentProjectIndex === index && this.fullScreenProjectIndex !== index)
      this.fullScreenProjectIndex = index;
    else
      this.fullScreenProjectIndex = -1;

    this.currentProjectIndex = index;

    this.ScrollToProject();
  }

  ScrollToProject() {
    if (this.fullScreenProjectIndex !== -1) {
      this.fullScreenProjectIndex = this.currentProjectIndex;
    }
    const projectDefaultId = 'project-'+this.currentProjectIndex;
    const projectElement = document.getElementById(projectDefaultId);

    if (!projectElement)
      return;


    projectElement.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });

    setTimeout(() => {
      projectElement.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    }, 500);
  }
}
