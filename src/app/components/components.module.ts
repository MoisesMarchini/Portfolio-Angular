import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorComponent } from './cursor/cursor.component';
import { DirectivesModule } from '../directives/directives.module';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CursorComponent,
    GridCardsComponent,
    NavMenuComponent,
    LoaderComponent,
  ],
  exports: [
    CursorComponent,
    GridCardsComponent,
    NavMenuComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
