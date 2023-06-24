import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { DirectivesModule } from '../directives/directives.module';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    CursorComponent,
    GridCardsComponent,
    NavMenuComponent,
  ],
  exports: [
    CursorComponent,
    GridCardsComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ]
})
export class ComponentsModule { }
