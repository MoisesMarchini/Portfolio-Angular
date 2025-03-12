import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { CursorComponent } from './cursor/cursor.component';
import { DefaultContainerComponent } from './default-container/default-container.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectCardGroupComponent } from './project-card-group/project-card-group.component';

@NgModule({
  declarations: [
    DefaultButtonComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CursorComponent,
    DefaultContainerComponent,
    SectionHeaderComponent,
    ProjectCardComponent,
    ProjectCardGroupComponent,
  ],
  exports: [
    DefaultButtonComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CursorComponent,
    DefaultContainerComponent,
    SectionHeaderComponent,
    ProjectCardComponent,
    ProjectCardGroupComponent,
  ],
  imports: [CommonModule, DirectivesModule, RouterModule],
})
export class ComponentsModule {}
