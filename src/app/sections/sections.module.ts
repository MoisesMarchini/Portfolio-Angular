import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProjectsComponent,
    HeaderComponent,
    SkillsComponent,
    ContactComponent,
  ],
  exports: [
    ProjectsComponent,
    HeaderComponent,
    SkillsComponent,
    ContactComponent,
  ]
})
export class SectionsModule { }
