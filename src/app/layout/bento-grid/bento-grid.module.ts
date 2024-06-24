import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BentoGridComponent } from './bento-grid.component';
import { BlockComponent } from './block/block.component';
import { SocialsComponent } from './socials/socials.component';
import { ProjectComponent } from './project/project.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BentoGridComponent,
    BlockComponent,
    SocialsComponent,
    ProjectComponent,
    DarkModeComponent,
  ],
  imports: [CommonModule, ComponentsModule, FormsModule],
  exports: [
    BentoGridComponent,
    BlockComponent,
    SocialsComponent,
    ProjectComponent,
    DarkModeComponent,
  ],
})
export class BentoGridModule {}
