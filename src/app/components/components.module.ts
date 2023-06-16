import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { DirectivesModule } from '../directives/directives.module';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundBlobComponent } from './background-blob/background-blob.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';



@NgModule({
  declarations: [
    CursorComponent,
    AccordionComponent,
    HeaderComponent,
    BackgroundBlobComponent,
    GridCardsComponent,
  ],
  exports: [
    CursorComponent,
    AccordionComponent,
    HeaderComponent,
    BackgroundBlobComponent,
    GridCardsComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ]
})
export class ComponentsModule { }
