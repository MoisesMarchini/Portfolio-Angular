import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BentoGridModule } from '../layout/bento-grid/bento-grid.module';
import { ProjectsPageComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    BentoGridModule,
  ],
  declarations: [HomeComponent, ProjectsPageComponent],
})
export class PagesModule {}
