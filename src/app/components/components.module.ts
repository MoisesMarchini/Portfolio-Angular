import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { DirectivesModule } from '../directives/directives.module';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CursorComponent,
    AccordionComponent,
    HeaderComponent
  ],
  exports: [
    CursorComponent,
    AccordionComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class ComponentsModule { }
