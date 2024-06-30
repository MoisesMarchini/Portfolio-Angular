import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BentoGridComponent } from './bento-grid.component';
import { BlockComponent } from './block/block.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DarkModeBlockComponent } from './dark-mode-block/dark-mode.component';
import { FormsModule } from '@angular/forms';
import { SocialBlockComponent } from './social-block/social-block.component';
import { LanguagesBlockComponent } from './languages-block/languages.component';
import { ProjectBlockComponent } from './project-block/project.component';

@NgModule({
  declarations: [
    BentoGridComponent,
    BlockComponent,
    ProjectBlockComponent,
    DarkModeBlockComponent,
    LanguagesBlockComponent,
    SocialBlockComponent,
  ],
  imports: [CommonModule, ComponentsModule, FormsModule],
  exports: [
    BentoGridComponent,
    BlockComponent,
    ProjectBlockComponent,
    DarkModeBlockComponent,
    LanguagesBlockComponent,
    SocialBlockComponent,
  ],
})
export class BentoGridModule {}
