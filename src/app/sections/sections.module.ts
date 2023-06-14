import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProjectsComponent,
  ],
  exports: [
    ProjectsComponent,
  ]
})
export class SectionsModule { }
