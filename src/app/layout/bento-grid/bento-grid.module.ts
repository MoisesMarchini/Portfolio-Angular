import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BentoGridComponent } from './bento-grid.component';
import { BlockComponent } from './block/block.component';
import { SocialsComponent } from './socials/socials.component';
import { ProjectComponent } from './project/project.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { FormsModule } from '@angular/forms';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    BentoGridComponent,
    BlockComponent,
    SocialsComponent,
    ProjectComponent,
    DarkModeComponent,
    LanguagesComponent,
  ],
  imports: [CommonModule, ComponentsModule, FormsModule],
  exports: [
    BentoGridComponent,
    BlockComponent,
    SocialsComponent,
    ProjectComponent,
    DarkModeComponent,
    LanguagesComponent,
  ],
})
export class BentoGridModule {}
