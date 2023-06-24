import { HeaderComponent } from '../sections/header/header.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { ContactComponent } from '../sections/contact/contact.component';

export const environment = {
  enabled3d: false,
  currentActiveSection: 0,
  darkMode: false,

  componentSelectors: [
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],

  sectionsTitle: [
    'Início',
    'Projetos',
    'Habilidades',
    'Contato',
  ],

  blobColors: [
    'var(--app-primary-color)',
    'transparent',
    'white',
    'white',
  ],

  boxMargin: [
    '10vmin',
    '0vmin',
    '20vmin',
    '30vmin',
  ],
  boxPadding: [
    '64px',
    '128px',
    '128px',
    '128px',
],
}
