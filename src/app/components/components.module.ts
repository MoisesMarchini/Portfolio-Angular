import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LookAtMouseDirective } from '../directives/LookAtMouse/LookAtMouse.directive';
import { DirectivesModule } from '../directives/directives.module';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    CursorComponent,
    ProjectCardComponent,
    AccordionComponent
  ],
  exports: [
    CursorComponent,
    ProjectCardComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
