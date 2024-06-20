import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { BentoGridModule } from './bento-grid/bento-grid.module';

@NgModule({
  declarations: [],
  exports: [BentoGridModule],
  imports: [CommonModule, DirectivesModule, RouterModule],
})
export class ComponentsModule {}
