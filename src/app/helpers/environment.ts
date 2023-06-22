import { HeaderComponent } from '../sections/header/header.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';

export const environment = {
  enabled3d: false,
  currentActiveSection: 0,
  darkMode: false,

  componentSelectors: [
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
  ],

  sectionsTitle: [
    'Início',
    'Projetos',
    'Habilidades',
  ],

  blobColors: [
    'var(--app-primary-color)',
    'transparent',
    'white',
  ],

  boxMargin: [
    '10vmin',
    '0vmin',
    '20vmin',
  ],
  boxPadding: [
    '64px',
    '128px',
    '128px',
],
}
