import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsPageComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [HomeComponent, ProjectsPageComponent, ProjectDetailsComponent],
})
export class PagesModule {}
