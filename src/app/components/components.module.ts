import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { DirectivesModule } from '../directives/directives.module';
import { AccordionComponent } from './accordion/accordion.component';
import { BackgroundBlobComponent } from './background-blob/background-blob.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    CursorComponent,
    AccordionComponent,
    BackgroundBlobComponent,
    GridCardsComponent,
    NavMenuComponent,
  ],
  exports: [
    CursorComponent,
    AccordionComponent,
    BackgroundBlobComponent,
    GridCardsComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ]
})
export class ComponentsModule { }
